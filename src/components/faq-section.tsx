import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";

export default function FaqSection() {
  return (
    <>
      <div className="grid gap-12 py-16">
        {/* Container */}
        <div className="px-4">
          {/* Content */}
          <div>
            {/* Heading and supporting text */}
            <div className="grid gap-4 text-center">
              <h2 className="text-3xl font-semibold text-gray-900">
                Frequently asked questions
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about the product and billing.
              </p>
            </div>
          </div>
        </div>
        {/* Container */}
        <div className="px-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Is there a free trial available?
              </AccordionTrigger>
              <AccordionContent>
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I change my plan later?</AccordionTrigger>
              <AccordionContent>
                Yes, you can change your plan anytime. Simply go to your account
                settings and select the new plan that better suits your needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What is your cancellation policy?
              </AccordionTrigger>
              <AccordionContent>
                Our cancellation policy is flexible. You can cancel your
                subscription anytime without contractual obligations. There are
                no cancellation fees.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can other info be added to an invoice?
              </AccordionTrigger>
              <AccordionContent>
                Yes, you can add additional information to the invoice, such as
                a purchase order number or special instructions for accounting.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How does billing work?</AccordionTrigger>
              <AccordionContent>
                Billing occurs automatically at the end of each billing cycle
                based on your selected plan and the number of active users.
                You'll receive a detailed invoice via email.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                How do I change my account email?
              </AccordionTrigger>
              <AccordionContent>
                You can change your account email in the account settings.
                Simply select the "Change Email" option and follow the
                instructions to input and confirm your new email address.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* Container */}
        <div className="px-4">
          {/* Content */}
          <div className="grid justify-items-center gap-6 rounded-md bg-gray-50 px-5 py-8">
            {/* Avatar group */}
            <div>
              <img src="./faq/avatargroup.svg" alt="" />
            </div>
            {/* Heading and supporting text */}
            <div className="grid gap-2 text-center">
              <p className="text-xl font-medium text-gray-900">
                Still have questions?
              </p>
              <p className="text-gray-600">
                Can't find the answer you're looking for? Please chat to our
                friendly team.
              </p>
            </div>
            {/* Actions */}
            <div>
              <Button className="font-semibold">Get in touch</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
