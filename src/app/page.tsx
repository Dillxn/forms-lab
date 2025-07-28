import createUserProfile from "@/actions/createUserProfile";
import Address from "@/components/forms/Address";
import Checkbox from "@/components/forms/Checkbox";
import Form from "@/components/forms/Form";
import Input from "@/components/forms/Input";
import Label from "@/components/forms/Label";
import Page from "@/components/forms/Page";
import Radio from "@/components/forms/Radio";

export default function HomePage() {
  return (
    <Form action={createUserProfile} required>
      <Page>
        <Input name="firstName" />
        <Input name="lastName" />
        <Address name="shipping" />
      </Page>
      <Page>
        <Checkbox
          name="sameShippingBillingAddress"
          label="Billing address is same as shipping"
        />
        <Address name="billing" disabled="sameShippingBillingAddress" />
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
