export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      status: "error",
      message: "Only POST allowed"
    });
  }

  const { purchase_code } = req.body || {};

  if (!purchase_code) {
    return res.status(400).json({
      status: "error",
      message: "purchase_code missing"
    });
  }

  return res.status(200).json({
    status: "success",
    message: "valid",
    purchase_code
  });
}
