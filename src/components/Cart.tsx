import React, { useState } from 'react';
import { Minus, Plus, Trash2, ArrowLeft, CreditCard } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';
import { Input } from './ui/input';

export const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Royal Maroon Lehenga",
      price: 25999,
      quantity: 1,
      size: "M",
      color: "Royal Maroon",
      image: "https://images.unsplash.com/photo-1656454805027-776af2bea231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbmRpYW4lMjBldGhuaWMlMjB3ZWFyJTIwd29tZW4lMjBsZWhlbmdhfGVufDF8fHx8MTc1ODM4MDg5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      name: "Golden Embroidered Kurta",
      price: 8999,
      quantity: 2,
      size: "L",
      color: "Golden",
      image: "https://images.unsplash.com/photo-1699800709647-649643a39de7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZW4lMjBrdXJ0YSUyMHB1bmphYmklMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NTgzODA4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      name: "Vintage Gold Jewelry Set",
      price: 45999,
      quantity: 1,
      size: "One Size",
      color: "Gold",
      image: "https://images.unsplash.com/photo-1723879580148-517048db5bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxsdXh1cnklMjBnb2xkJTIwamV3ZWxyeSUyMGluZGlhbnxlbnwxfHx8fDE3NTgzODA4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [currentStep, setCurrentStep] = useState('cart'); // cart, checkout

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 2999 ? 0 : 199;
  const discount = promoCode === 'SINGH10' ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal + shipping - discount;

  const CheckoutForm = () => (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-8">
        <Button 
          variant="ghost" 
          onClick={() => setCurrentStep('cart')}
          className="p-0 hover:text-[#D4AF37]"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Cart
        </Button>
        <h2 className="text-2xl font-bold text-[#0F0F0F]" style={{ fontFamily: 'Playfair Display, serif' }}>
          Checkout
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Shipping Address */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-[#0F0F0F] mb-4">Shipping Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
              <Input placeholder="Email" className="md:col-span-2" />
              <Input placeholder="Phone Number" className="md:col-span-2" />
              <Input placeholder="Address Line 1" className="md:col-span-2" />
              <Input placeholder="Address Line 2" className="md:col-span-2" />
              <Input placeholder="City" />
              <Input placeholder="State" />
              <Input placeholder="PIN Code" />
              <Input placeholder="Country" />
            </div>
          </Card>

          {/* Payment Methods */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-[#0F0F0F] mb-4">Payment Method</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 border rounded-lg hover:border-[#D4AF37] cursor-pointer">
                <input type="radio" name="payment" id="upi" className="accent-[#D4AF37]" />
                <label htmlFor="upi" className="flex-1 cursor-pointer">UPI</label>
                <div className="text-sm text-gray-600">GPay, PhonePe, Paytm</div>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg hover:border-[#D4AF37] cursor-pointer">
                <input type="radio" name="payment" id="card" className="accent-[#D4AF37]" />
                <label htmlFor="card" className="flex-1 cursor-pointer">Credit/Debit Card</label>
                <CreditCard className="h-5 w-5 text-gray-400" />
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg hover:border-[#D4AF37] cursor-pointer">
                <input type="radio" name="payment" id="cod" className="accent-[#D4AF37]" />
                <label htmlFor="cod" className="flex-1 cursor-pointer">Cash on Delivery</label>
                <div className="text-sm text-gray-600">₹50 extra</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Order Summary - Sticky */}
        <div className="lg:sticky lg:top-4 lg:h-fit">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-[#0F0F0F] mb-4">Order Summary</h3>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-gray-600">{item.size} • {item.color}</p>
                    <p className="text-sm font-semibold">₹{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                  <div className="text-sm text-gray-600">Qty: {item.quantity}</div>
                </div>
              ))}
              
              <Separator />
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-₹{discount.toLocaleString()}</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>
              
              <Button className="w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0F0F0F] py-3 font-semibold">
                Place Order
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );

  if (currentStep === 'checkout') {
    return (
      <section className="py-12 bg-[#FDFCF7] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CheckoutForm />
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-[#FDFCF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold text-[#0F0F0F]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Shopping Cart
          </h1>
          <span className="text-gray-600">({cartItems.length} items)</span>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">Your cart is empty</h2>
            <Button className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0F0F0F]">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="p-6">
                  <div className="flex gap-6">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-[#0F0F0F] mb-2">{item.name}</h3>
                      <div className="text-sm text-gray-600 mb-3">
                        <span>Size: {item.size}</span> • <span>Color: {item.color}</span>
                      </div>
                      <p className="text-xl font-bold text-[#0F0F0F]">₹{item.price.toLocaleString()}</p>
                    </div>

                    <div className="flex flex-col items-end gap-4">
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                      
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Order Summary - Sticky */}
            <div className="lg:sticky lg:top-4 lg:h-fit">
              <Card className="p-6">
                <h2 className="text-xl font-semibold text-[#0F0F0F] mb-6">Order Summary</h2>
                
                {/* Promo Code */}
                <div className="mb-6">
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button 
                      variant="outline"
                      className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
                    >
                      Apply
                    </Button>
                  </div>
                  {promoCode === 'SINGH10' && (
                    <p className="text-green-600 text-sm mt-2">✓ 10% discount applied!</p>
                  )}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                  </div>
                  {shipping === 0 && (
                    <p className="text-sm text-green-600">🎉 Free shipping on orders above ₹2,999</p>
                  )}
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount (SINGH10)</span>
                      <span>-₹{discount.toLocaleString()}</span>
                    </div>
                  )}
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0F0F0F] py-3 text-lg font-semibold mb-4"
                  onClick={() => setCurrentStep('checkout')}
                >
                  Proceed to Checkout
                </Button>

                <div className="text-center space-y-2">
                  <div className="flex justify-center gap-4 text-sm text-gray-600">
                    <span>✓ Secure Payment</span>
                    <span>✓ Easy Returns</span>
                    <span>✓ COD Available</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};