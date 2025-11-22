export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      status: "error",
      message: "Only POST allowed"
    });
  }

  try {
    const data = req.body;

    if (!data || !data.purchase_code) {
      return res.status(400).json({
        status: "error",
        message: "purchase_code missing"
      });
    }

    return res.status(200).json({
      status: "success",
      message: "valid",
      purchase_code: data.purchase_code
    });

  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: "internal server error",
      details: err.message
    });
  }
}
