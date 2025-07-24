export default function HomePage() {
  return (
    <Form action={createUserProfile} required>
      <Page>
        <Input name="firstName" />
        <Input name="lastName" />
        <Address name="shippingAddress" />
      </Page>
      <Page>
        <Checkbox
          name="sameShippingBillingAddress"
          label="Billing address is same as shipping"
        />
        <Address name="billingAddress" disabled="sameShippingBillingAddress" />
        <h3>Municipality check</h3>
        <Radio
          name="isMunicipality"
          label="Are you purchasing on behalf of a municipality?"
        />
        <Label
          className="text-red"
          label="Please note that municipalities must provide a purchase order at checkout"
          visible="isMunicipality"
        />
      </Page>
    </Form>
  );
}
