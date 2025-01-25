import Razorpay from "razorpay";

export async function POST(request) {
  try {
    // Parse the incoming request body
    const body = await request.json();
    const { amount, currency, receipt } = body;

    // Validate request data
    if (!amount || !currency) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid request data" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Initialize Razorpay instance
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Replace with your Razorpay Key ID
      key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET, // Replace with your Razorpay Key Secret
    });

    // Create an order
    const order = await razorpay.orders.create({
      amount, // Amount in smallest currency unit (e.g., paise for INR)
      currency, // Currency code (e.g., "INR")
      receipt: receipt || `receipt_${Date.now()}`, // Optional receipt identifier
    });

    // Return the created order
    return new Response(
      JSON.stringify({ success: true, order }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error creating order:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Order creation failed", error }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}