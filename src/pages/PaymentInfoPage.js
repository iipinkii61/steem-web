import React from "react";
import PaymentInfoLayout from "../layouts/PaymentInfoLayout";
import PageMainLayout from "../layouts/PageMainLayout";
import ThankYou from "../components/ThankYou";

export default function PaymentInfoPage() {
  return (
    <div>
      <PageMainLayout>
        {/* <PaymentInfoLayout /> */}
        <ThankYou />
      </PageMainLayout>
    </div>
  );
}
