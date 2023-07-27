const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const stripe = require("stripe")(process.env.STRIPE_SECRETKEY)



exports.ProcessPayment = catchAsyncErrors(async (req, res) => {
   
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency:"inr",
    metadata:{
      company:"Ecommerce",
      
    },

  })

  res.status(200).json({
    success:true,
    client_secret: myPayment.client_secret,
  })

});

exports.SendStripeApi = catchAsyncErrors(async (req, res) => {

  res.status(200).json({
    success:true,
    stripeApiKey: process.env.STRIPE_APIKEY,
  })

});