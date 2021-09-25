<script>
  import FlexGrid from "./FlexGrid/FlexGrid.svelte";
  import FlexRow from "./FlexGrid/FlexRow.svelte";
  import FlexCol from "./FlexGrid/FlexCol.svelte";
</script>

<style>
  p {
    border: 1px solid #cccccc;
    padding: 1.5rem 3rem;
  }
</style>

<section>
  <FlexGrid customClasses="custom-grid-klass">
    <FlexRow>
      <FlexCol xs="{12}" sm="{4}" lg="{6}" xl="{4}">
        <p>xs=12 sm=4 lg=6 xl=4</p>
      </FlexCol>
      <FlexCol xs="{12}" sm="{4}" lg="{6}" xl="{8}">
        <p>xs=12 sm=4 lg=6 xl=8</p>
      </FlexCol>
    </FlexRow>
  </FlexGrid>
</section>
<section>
  <FlexGrid customClasses="customKlass1 customKlass2">
    <FlexRow reverse>
      <h1>test</h1>
    </FlexRow>
  </FlexGrid>
</section>
<section>
  <FlexGrid>
    <FlexRow>
      <FlexCol sm="{2}">
        <p>sm="2"</p>
      </FlexCol>
      <FlexCol sm="{2}" smOffset="{1}">
        <p>sm={2} smOffset={1}</p>
      </FlexCol>
      <FlexCol sm="{2}" smOffset="{1}">
        <p>sm={2} smOffset={1}</p>
      </FlexCol>
      <FlexCol sm="{2}" smOffset="{2}">
        <p>sm={2} smOffset={2}</p>
      </FlexCol>
    </FlexRow>
  </FlexGrid>
</section>
<section>
  <h1>Row attributes test. Maybe ignore this ;)</h1>
  <FlexGrid customClasses="custom-grid-klass">
    <!-- Purposely adding all row keys just check they get inserted on row element :) -->
    <FlexRow
      start="sm"
      center="md"
      end="lg"
      top="xl"
      middle="xs"
      bottom="xs"
      around="sm"
      between="lg"
    />
  </FlexGrid>
</section>
