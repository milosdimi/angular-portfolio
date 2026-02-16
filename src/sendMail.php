<?php

// ===============================
// CONFIG
// ===============================

// ✅ Set your recipient email here
$recipient = 'dm@dimit.cc';

// ✅ Should match your domain for better deliverability
$fromEmail = 'noreply@dimit.cc';

// ✅ Allowed frontend origins (CORS)
$allowedOrigins = [
  'https://dimit.cc',
  'https://www.dimit.cc',
  // Uncomment for local dev:
  // 'http://localhost:4200',
];

$subjectPrefix = 'Portfolio Contact';


// ===============================
// CORS (only allow listed origins)
// ===============================
function setCorsHeaders(array $allowedOrigins): void {
  if (!isset($_SERVER['HTTP_ORIGIN'])) return;

  $origin = $_SERVER['HTTP_ORIGIN'];
  if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: $origin");
    header("Vary: Origin");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
  }
}

setCorsHeaders($allowedOrigins);

// Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

// Only POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  header('Content-Type: application/json; charset=utf-8');
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

header('Content-Type: application/json; charset=utf-8');


// ===============================
// Read + validate JSON input
// ===============================
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Invalid JSON']);
  exit;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');

// Required fields
if ($name === '' || $email === '' || $message === '') {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Missing fields']);
  exit;
}

// Length limits
if (mb_strlen($name) > 80 || mb_strlen($email) > 120 || mb_strlen($message) > 4000) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Input too long']);
  exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Invalid email']);
  exit;
}


// ===============================
// Sanitize + build email
// ===============================
$safeName = htmlspecialchars($name, ENT_QUOTES | ENT_HTML5, 'UTF-8');
$safeEmail = htmlspecialchars($email, ENT_QUOTES | ENT_HTML5, 'UTF-8');
$safeMsg = nl2br(htmlspecialchars($message, ENT_QUOTES | ENT_HTML5, 'UTF-8'));

$subject = $subjectPrefix . " <$safeEmail>";

$body = "
  <h2>New portfolio contact</h2>
  <p><strong>Name:</strong> {$safeName}</p>
  <p><strong>Email:</strong> {$safeEmail}</p>
  <p><strong>Message:</strong><br>{$safeMsg}</p>
";

// Headers
$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=utf-8';
$headers[] = "From: {$subjectPrefix} <{$fromEmail}>";
// ✅ Reply-To is important so you can answer directly to the sender
$headers[] = "Reply-To: {$safeName} <{$email}>";


// ===============================
// Send
// ===============================
$sent = mail($recipient, $subject, $body, implode("\r\n", $headers));

if ($sent) {
  echo json_encode(['ok' => true]);
} else {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Mail failed']);
}
