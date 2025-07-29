<div align="center">
    <img alt="Forms Lab logo" src="https://github.com/Dillxn/forms-lab/raw/refs/heads/main/logo.svg" height="128">
</div>
<div align="center">
<img alt="Join the community on GitHub" src="https://img.shields.io/badge/Made_for_Next.js-blue.svg?style=for-the-badge&logo=Next.js&labelColor=000000&logoWidth=20">
<img alt="License" src="https://img.shields.io/npm/l/next.svg?style=for-the-badge&labelColor=000000">

</div>

## Getting Started

**Formslab** is an experiment in making forms in Next.js _fun_ and _easy_. It is designed with a radically simple API and built with a DX-first philosophy.

A form in Formslab is created using simple-to-use, composable Lego-like components. For example:

```jsx
<Form action={createUserProfile} required>
  <Page>
    <Input name="firstName" />
    <Input name="lastName" />
    <Address name="shipping" />
  </Page>
  <Page>
    <Checkbox
      name="sameShippingBilling"
      label="Billing address is same as shipping"
    />
    <Address name="billing" disabled="sameShippingBilling" />
    <h3>Municipality check</h3>
    <Radio
      name="isMunicipality"
      label="Are you a municipality?"
    />
    <Label
      className="text-red"
      label="Please provide a purchase order at checkout"
      visible="isMunicipality"
    />
  </Page>
</Form>
```
