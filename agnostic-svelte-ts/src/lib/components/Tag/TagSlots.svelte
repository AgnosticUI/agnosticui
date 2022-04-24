<style>
  div {
    margin-block-end: 1rem;
  }
</style>

<script>
  import Tag from "./Tag.svelte";
</script>

<div>
  <Tag>unknown</Tag>
</div>
<div>
  <Tag isUppercase>unknown</Tag>
</div>
<div>
  <Tag shape="round">round</Tag>
</div>
<div>
  <Tag shape="pill">pill aka badge</Tag>
</div>
<div>
  <Tag shape="circle">1</Tag>
  <Tag shape="circle" type="error">2</Tag>
  <Tag shape="circle" type="info">3</Tag>
  <Tag shape="circle" type="warning">4</Tag>
</div>
<div>
  <Tag type="success">success</Tag>
</div>
<div>
  <Tag type="info">info</Tag>
</div>
<div>
  <Tag type="error">error</Tag>
</div>
<div>
  <Tag type="warning">warning</Tag>
</div>
<div>
  <Tag type="info" shape="pill" isUppercase>saved</Tag>
</div>
<div>
  <Tag type="warning" shape="pill" isUppercase>sure?</Tag>
</div>
<div>
  <Tag type="success" shape="pill" isUppercase>yes</Tag>
</div>
<div>
  <Tag type="error" shape="pill" isUppercase>no</Tag>
</div>
