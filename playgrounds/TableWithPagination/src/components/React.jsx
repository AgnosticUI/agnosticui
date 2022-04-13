import "agnostic-react/dist/esm/index.css";
import { Table  } from "agnostic-react";

const headersWithWidths = [
  {
    label: 'Name',
    key: 'name',
    width: '25%',
    sortable: true,
  },
  {
    label: 'Weapon',
    key: 'weapon',
    width: '45%',
  },
  {
    label: 'Grand Slams',
    key: 'slams',
    width: '13%',
    sortable: true,
    renderFn: (key, value) => (
      <td key={key} style={{ textAlign: 'center' }}>
        {value}
        <span className="mis6">🏆</span>
      </td>
    ),
  },
  {
    label: 'Birthdate',
    key: 'birthdate',
    width: '17%',
    sortable: true,
    sortFn: (a, b) => {
      const d1 = new Date(a).getTime() || -Infinity;
      const d2 = new Date(b).getTime() || -Infinity;
      if (d1 > d2) {
        return 1;
      }
      if (d1 < d2) {
        return -1;
      }
      return 0;
    },
  },
];

const createRow = (name, weapon, slams, birthdate) => ({ name, weapon, slams, birthdate });

const rows = [
  createRow(
    'Serena Williams',
    "Biggest serve in women's tennis all-time",
    23,
    'September 26, 1981',
  ),
  createRow('Roger Federer', 'Forehand and serve', 20, 'August 8, 1981'),
  createRow('Andre Agassi', 'Return of serve. Groundstrokes', 8, 'April 29, 1970'),
  createRow('Steffi Graf', 'Forehand', 22, 'June 14, 1969')
];

export default function ReactAlert() {
  return (
    <section className="mbe40">
      <div className="h4 mbe32 flex items-center">
        <img width="24" height="24" src="/assets/React-icon.svg" alt="React logo" className="mie12" />React Table
      </div>
    <Table
      headers={headersWithWidths}
      rows={rows}
      isStriped
      caption="Tennis Superstars"
    /> 
    </section>
  );
}
