
import React from 'react';
import FlexGrid from './FlexGrid/FlexGrid.js'
import FlexRow from './FlexGrid/FlexRow.js'
import FlexCol from './FlexGrid/FlexCol.js'
import styles from './FlexGrid/FlexGridExample.module.css'
const Field = ({ label = "Field" }) => <p className={styles.Field}>{label}</p>

export default {
  title: 'Grid',
  component: FlexGrid,
};

export const UsageExamples = () => (
  <>
    <section>
      <h1>FlexGrid</h1>
      <p>
        <i>xs</i> = Extra Small.
        <i>sm</i> = Small.
        <i>md</i> = Medium.
        <i>lg</i> = Large.
        <i>xl</i> = Extra Large.
      </p>
      <p>The following breakpoints can be overriden by redefining in your stylesheet and omitting the <i>-default</i> part:</p>
      <pre>
        --agnosticui-default-sm-min: 576px;
        --agnosticui-default-md-min: 768px;
        --agnosticui-default-lg-min: 992px;
        --agnosticui-default-xl-min: 1200px;
      </pre>
      <FlexGrid>
        <FlexRow className={styles.DemoCol}>
          <FlexCol xs={12} sm={4} lg={6}>
            <Field label="xs={12} sm={4} lg={6}" />
          </FlexCol>
          <FlexCol xs={12} sm={4} lg={6}>
            <Field label="xs={12} sm={4} lg={6}" />
          </FlexCol>
          <FlexCol xs={12} sm={4} lg={3}>
            <Field label="xs={12} sm={4} lg={3}" />
          </FlexCol>
          <FlexCol xs={12} sm={4} lg={3}>
            <Field label="xs={12} sm={4} lg={3}" />
          </FlexCol>
          <FlexCol xs={12} sm={4} lg={3}>
            <Field label="xs={12} sm={4} lg={3}" />
          </FlexCol>
          <FlexCol xs={12} sm={4} lg={3}>
            <Field label="xs={12} sm={4} lg={3}" />
          </FlexCol>
        </FlexRow>
      </FlexGrid>
    </section>
    <section>
      <h1>Complex</h1>
      <p>Not that you'd want this level of complexity, but it is available:</p>
      <FlexGrid>
        <FlexRow className={styles.DemoCol}>
          <FlexCol xs={12} sm={8} md={4} lg={3} xl={2}>
            <Field label="xs={12} sm={8} md={4} lg={3} xl={2}" />
          </FlexCol>
          <FlexCol xs={12} sm={8} md={4} lg={3} xl={2}>
            <Field label="xs={12} sm={8} md={4} lg={3} xl={2}" />
          </FlexCol>
          <FlexCol xs={12} sm={8} md={4} lg={3} xl={2}>
            <Field label="xs={12} sm={8} md={4} lg={3} xl={2}" />
          </FlexCol>
        </FlexRow>
      </FlexGrid>
    </section>
    <section>
      <h1>Offsets</h1>
      <FlexGrid>
        <FlexRow className={styles.DemoCol}>
          <FlexCol sm={2} style={{ border: '1px solid #f7cac9' }}>
            <p>sm={2}</p>
          </FlexCol>
          <FlexCol sm={2} smOffset={1} style={{ border: '1px solid #39cccc' }}>
            <p>sm={2} smOffset={1}</p>
          </FlexCol>
          <FlexCol sm={2} smOffset={1} style={{ border: '1px solid #7fdbff' }}>
            <p>sm={2} smOffset={1}</p>
          </FlexCol>
          <FlexCol sm={2} smOffset={1} style={{ border: '1px solid #ff6f61' }}>
            <p>sm={2} smOffset={1}</p>
          </FlexCol>
        </FlexRow>
      </FlexGrid>
      <p>See <a href="https://evgenyrodionov.github.io/flexboxgrid2/">flexboxgrid2</a> for more examples.</p>
    </section>
  </>
)
