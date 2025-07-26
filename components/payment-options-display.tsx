"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog" // Import Dialog components
import { Input } from "@/components/ui/input" // Import Input
import { Label } from "@/components/ui/label" // Import Label
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select" // Import Select
import { Textarea } from "@/components/ui/textarea" // Import Textarea
import { Bitcoin, DollarSign, EclipseIcon as Ethereum, IndianRupee, Banknote, Copy, Check, Loader2 } from "lucide-react" // Import Loader2
import Link from "next/link"
import { toast } from "@/hooks/use-toast"
import { motion, AnimatePresence } from "framer-motion" // Import motion and AnimatePresence

// Reusable Copy Button Component
function CopyButton({ textToCopy }: { textToCopy: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      toast({
        title: "Copied!",
        description: "Address copied to clipboard.",
      })
      setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err)
      toast({
        title: "Copy Failed",
        description: "Could not copy address. Please try manually.",
        variant: "destructive",
      })
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleCopy}
      className="text-neon-green hover:bg-neon-green/10 hover:text-neon-green transition-colors"
      aria-label="Copy to clipboard"
    >
      {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
    </Button>
  )
}

export default function PaymentOptionsDisplay() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showVerificationPopup, setShowVerificationPopup] = useState(false)
  const [paymentProofData, setPaymentProofData] = useState({
    transactionId: "",
    amount: "",
    currency: "",
    proofFile: null as File | null,
    notes: "",
  })
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleProofFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setPaymentProofData((prev) => ({ ...prev, [name]: value }))
  }

  const handleProofFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPaymentProofData((prev) => ({ ...prev, proofFile: e.target.files![0] }))
    } else {
      setPaymentProofData((prev) => ({ ...prev, proofFile: null }))
    }
  }

  const handleProofCurrencySelectChange = (value: string) => {
    setPaymentProofData((prev) => ({ ...prev, currency: value }))
  }

  const handleSubmitProof = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Client-side validation
    if (!paymentProofData.transactionId.trim() || !paymentProofData.amount.trim() || !paymentProofData.currency) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Transaction ID, Amount, Currency).",
        variant: "destructive",
      })
      return
    }

    setShowVerificationPopup(true)

    // Simulate payment verification process
    console.log("Submitting payment proof:", paymentProofData)
    await new Promise((resolve) => setTimeout(resolve, 3000)) // Simulate network request

    // For this example, we'll just close the popup. In a real app, you'd handle backend logic.
    setShowVerificationPopup(false)
    toast({
      title: "Payment Verification Initiated",
      description: "Your payment is being verified. We will contact you shortly.",
      variant: "default",
    })

    // Reset form
    setPaymentProofData({
      transactionId: "",
      amount: "",
      currency: "",
      proofFile: null,
      notes: "",
    })
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-12">
      <div className="w-full max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white text-neon-glow-red animate-flicker mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Make a Payment
        </motion.h1>

        <Accordion type="single" collapsible className="w-full" value={isExpanded ? "payment-options" : ""}>
          <AccordionItem value="payment-options" className="border-none">
            <AccordionTrigger
              className="w-full flex justify-center"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
            >
              <Button className="bg-neon-red text-white font-bold py-3 px-10 rounded-md text-xl uppercase tracking-wider transition-all duration-300 hover:shadow-neon-red hover:scale-105 border-2 border-neon-red">
                {isExpanded ? "Hide Payment Options" : "Show Payment Options"}
              </Button>
            </AccordionTrigger>
            <AccordionContent className="pt-8">
              <div className="space-y-12">
                {/* Cryptocurrency Section */}
                <motion.div
                  className="bg-card p-6 sm:p-8 rounded-lg border-2 border-neon-green shadow-neon-green/50" /* Adjusted padding */
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 50 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neon-glow-green">Cryptocurrency</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* BTC */}
                    <Card className="bg-gray-900 border border-gray-700 text-left flex flex-col">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-xl font-bold text-neon-glow-red">Bitcoin (BTC)</CardTitle>
                        <Bitcoin className="w-8 h-8 text-neon-green" />
                      </CardHeader>
                      <CardContent className="flex-grow pt-2 flex flex-col justify-between">
                        <p className="text-gray-300 text-sm mb-2">Address:</p>
                        <div className="flex items-center justify-between bg-gray-800 p-3 rounded-md border border-gray-700">
                          <span className="text-sm text-white break-all font-mono">
                            3NkpBvdnAX9kdMUy7Ceda1bLyk67Qs9oSW
                          </span>
                          <CopyButton textToCopy="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh" />
                        </div>
                      </CardContent>
                    </Card>

                    {/* USDT (TRC20) */}
                    <Card className="bg-gray-900 border border-gray-700 text-left flex flex-col">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-xl font-bold text-neon-glow-red">USDT (TRC20)</CardTitle>
                        <DollarSign className="w-8 h-8 text-neon-green" />
                      </CardHeader>
                      <CardContent className="flex-grow pt-2 flex flex-col justify-between">
                        <p className="text-gray-300 text-sm mb-2">Address:</p>
                        <div className="flex items-center justify-between bg-gray-800 p-3 rounded-md border border-gray-700">
                          <span className="text-sm text-white break-all font-mono">
                            TDMN21rEjQF1oc1PAJQoaCir2pRgUx7tRn
                          </span>
                          <CopyButton textToCopy="TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t" />
                        </div>
                      </CardContent>
                    </Card>

                    {/* ETH */}
                    <Card className="bg-gray-900 border border-gray-700 text-left flex flex-col">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-xl font-bold text-neon-glow-red">Ethereum (ETH)</CardTitle>
                        <Ethereum className="w-8 h-8 text-neon-green" />
                      </CardHeader>
                      <CardContent className="flex-grow pt-2 flex flex-col justify-between">
                        <p className="text-gray-300 text-sm mb-2">Address:</p>
                        <div className="flex items-center justify-between bg-gray-800 p-3 rounded-md border border-gray-700">
                          <span className="text-sm text-white break-all font-mono">
                            0x0d2731996ecb6bc4d08f6d4ff847cd0ddc3b2b4f
                          </span>
                          <CopyButton textToCopy="0x742d35Cc6634C0532925a3b844Bc454e4438f444" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <p className="mt-8 text-gray-400 text-sm italic">
                    Always verify the address with us via WhatsApp/Telegram before sending funds.
                  </p>
                </motion.div>

                {/* Traditional Payment Section */}
                <motion.div
                  className="bg-card p-6 sm:p-8 rounded-lg border-2 border-neon-red shadow-neon-red/50" /* Adjusted padding */
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 50 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neon-glow-red">Traditional Payment</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* UPI */}
                    <Card className="bg-gray-900 border border-gray-700 text-left flex flex-col">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-xl font-bold text-neon-glow-green">UPI ID</CardTitle>
                        <IndianRupee className="w-8 h-8 text-neon-green" />
                      </CardHeader>
                      <CardContent className="flex-grow pt-2">
                        <p className="text-gray-300 text-sm mb-2">ID:</p>
                        <div className="flex items-center justify-between bg-gray-800 p-3 rounded-md border border-gray-700">
                          <span className="text-sm text-white break-all font-mono">shadowsuite@upi</span>
                          <CopyButton textToCopy="shadowsuite@upi" />
                        </div>
                        <p className="text-xs text-gray-400 mt-2">
                          (For Indian customers only. Please add order reference in notes.)
                        </p>
                      </CardContent>
                    </Card>

                    {/* PayPal */}
                    <Card className="bg-gray-900 border border-gray-700 text-left flex flex-col">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-xl font-bold text-neon-glow-green">PayPal</CardTitle>
                        <Banknote className="w-8 h-8 text-neon-green" />
                      </CardHeader>
                      <CardContent className="flex-grow pt-2 flex flex-col justify-between h-full">
                        <p className="text-gray-300 text-sm mb-4">
                          Click the button below to proceed with PayPal payment.
                        </p>
                        <Link
                          href="https://paypal.me/yourusername"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          <Button className="w-full bg-neon-red text-white font-bold py-2 px-4 rounded-md uppercase tracking-wider transition-all duration-300 hover:shadow-neon-red hover:scale-105 border-2 border-neon-red">
                            Pay with PayPal
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>

                    {/* Bank Transfer */}
                    <Card className="bg-gray-900 border border-gray-700 text-left md:col-span-2 flex flex-col">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-xl font-bold text-neon-glow-green">Bank Transfer</CardTitle>
                        <Banknote className="w-8 h-8 text-neon-green" />
                      </CardHeader>
                      <CardContent className="flex-grow pt-2">
                        <div className="space-y-2 text-sm text-white">
                          <p>
                            <span className="text-neon-red font-semibold">Bank Name:</span> Your Bank Name
                          </p>
                          <p>
                            <span className="text-neon-red font-semibold">Account Number:</span> XXXXXXXXXXXXXX
                          </p>
                          <p>
                            <span className="text-neon-red font-semibold">IFSC Code:</span> BANK000XXXX
                          </p>
                          <p>
                            <span className="text-neon-red font-semibold">Account Holder Name:</span> Your Name /
                            Company Name
                          </p>
                        </div>
                        <p className="text-xs text-gray-400 mt-4">
                          (For Indian customers only. Please contact us before initiating a bank transfer to confirm
                          details and receive a unique reference.)
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </div>
              {/* Payment Proof Form Section */}
              <motion.div
                className="mt-12 bg-card p-6 sm:p-8 rounded-lg border-2 border-neon-green shadow-neon-green/50" /* Adjusted padding */
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 50 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-neon-glow-red mb-8">Upload Payment Verification</h2>
                <p className="text-gray-400 mb-6 text-lg">
                  Once you've made the payment using one of the methods above, please fill out this form to help us
                  verify your transaction quickly.
                </p>
                <form onSubmit={handleSubmitProof} className="space-y-6 text-left">
                  <div>
                    <Label htmlFor="transactionId" className="text-neon-green text-lg mb-2 block">
                      Transaction ID / Hash <span className="text-neon-red">*</span>
                    </Label>
                    <Input
                      id="transactionId"
                      name="transactionId"
                      type="text"
                      value={paymentProofData.transactionId}
                      onChange={handleProofFormChange}
                      required
                      className="bg-gray-900 border-neon-green text-white focus:ring-neon-red focus:border-neon-red"
                      placeholder="e.g., 0xabc123def456..."
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="amount" className="text-neon-green text-lg mb-2 block">
                        Amount Paid <span className="text-neon-red">*</span>
                      </Label>
                      <Input
                        id="amount"
                        name="amount"
                        type="number"
                        step="0.00000001"
                        value={paymentProofData.amount}
                        onChange={handleProofFormChange}
                        required
                        className="bg-gray-900 border-neon-green text-white focus:ring-neon-red focus:border-neon-red"
                        placeholder="e.g., 0.005"
                      />
                    </div>
                    <div>
                      <Label htmlFor="currency" className="text-neon-green text-lg mb-2 block">
                        Currency <span className="text-neon-red">*</span>
                      </Label>
                      <Select
                        onValueChange={handleProofCurrencySelectChange}
                        value={paymentProofData.currency}
                        required
                      >
                        <SelectTrigger
                          id="currency"
                          className="w-full bg-gray-900 border-neon-green text-white focus:ring-neon-red focus:border-neon-red"
                        >
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-neon-green text-white">
                          <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
                          <SelectItem value="USDT">USDT (Tether)</SelectItem>
                          <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
                          <SelectItem value="UPI">UPI (INR)</SelectItem>
                          <SelectItem value="BANK">Bank Transfer (INR)</SelectItem>
                          <SelectItem value="PAYPAL">PayPal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="proofFile" className="text-neon-green text-lg mb-2 block">
                      Upload Screenshot of Transaction (Optional)
                    </Label>
                    <Input
                      id="proofFile"
                      name="proofFile"
                      type="file"
                      accept="image/*,application/pdf"
                      onChange={handleProofFileChange}
                      ref={fileInputRef}
                      className="bg-gray-900 border-neon-green text-white file:text-neon-green file:bg-gray-800 file:border-0 file:rounded-md file:py-2 file:px-4 file:mr-4 hover:file:bg-gray-700"
                    />
                    {paymentProofData.proofFile && (
                      <p className="text-sm text-gray-400 mt-2">Selected file: {paymentProofData.proofFile.name}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="notes" className="text-neon-green text-lg mb-2 block">
                      Additional Notes (Optional)
                    </Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={paymentProofData.notes}
                      onChange={handleProofFormChange}
                      rows={3}
                      className="bg-gray-900 border-neon-green text-white focus:ring-neon-red focus:border-neon-red"
                      placeholder="Any specific details about your order or payment..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-neon-red text-white font-bold py-3 px-8 rounded-md text-lg uppercase tracking-wider transition-all duration-300 hover:shadow-neon-red hover:scale-105 border-2 border-neon-red flex items-center justify-center gap-2"
                  >
                    I have paid
                  </Button>
                </form>
              </motion.div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Payment Verification Pop-up */}
      <AnimatePresence>
        {showVerificationPopup && (
          <Dialog open={showVerificationPopup} onOpenChange={setShowVerificationPopup}>
            <DialogContent className="sm:max-w-[425px] bg-card border-2 border-neon-green text-white p-6 rounded-lg shadow-neon-green/50">
              <DialogHeader className="text-center">
                <DialogTitle className="text-2xl font-bold text-neon-glow-green">Payment Verification</DialogTitle>
                <DialogDescription className="text-gray-400 mt-2">
                  Your payment is being verified. Please wait a moment.
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-center py-6">
                <Loader2 className="h-16 w-16 animate-spin text-neon-red" />
              </div>
              <p className="text-center text-sm text-gray-500">
                You will be notified once the verification is complete.
              </p>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  )
}
