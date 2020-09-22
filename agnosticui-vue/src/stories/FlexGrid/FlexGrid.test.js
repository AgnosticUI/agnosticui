import FlexGrid from './FlexGrid';
import FlexRow from './FlexRow';
// import FlexCol from './FlexCol';
// import styles from './FlexGridExample.module.css'
import renderer from 'react-test-renderer'

// const Field = () => <p className={styles.Field}>Field</p>

describe('FlexGrid', () => {
  describe('API', () => {
    test('exports properly', () => {
      expect(FlexGrid).toBeDefined()
      expect(FlexRow).toBeDefined()
      // expect(FlexCol).toBeDefined()
    })
  })

  xdescribe('rendering component', () => {
    test('default', () => {
      const tree = renderer
        .create(
          <FlexGrid>
            <FlexRow>
              <FlexCol xs={12} sm={4} lg={6}>
                <span>yo</span>
              </FlexCol>
              <FlexCol xs={12} sm={4} lg={6}>
                <span>yo</span>
              </FlexCol>
            </FlexRow>
          </FlexGrid>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
