<script>
// Import the required AgnosticUI global common and component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Table } from "agnostic-vue";

const createRow = (name, weapon, slams, birthdate) => ({
  name,
  weapon,
  slams,
  birthdate,
});

export default {
  name: "TagExamples",
  components: {
    Table,
  },
  data() {
    return {
      rows: [
        createRow("Roger Federer", "Forehand and serve", 20, "August 8, 1981"),
        createRow(
          "Andre Agassi",
          "Return of serve. Groundstrokes",
          8,
          "April 29, 1970"
        ),
        createRow("Steffi Graf", "Forehand", 22, "June 14, 1969"),
        createRow(
          "Martina Navratilova",
          "Serve and volley",
          18,
          "October 18, 1956"
        ),
        createRow("Rafael Nadal", "Backhand and speed", 20, "June 3, 1986"),
        createRow(
          "Althea Gibson",
          "Speed, strength, and fluidity ",
          11,
          "August 25, 1927"
        ),
        createRow("Novak Djokovic", "Backhand and speed", 20, "May 22, 1987"),
        createRow("Arthur Ashe", "Serve and volley", 3, "July 10, 1943"),
      ],
      headers: [
        {
          label: "Name",
          key: "name",
          width: "25%",
          sortable: true,
        },
        {
          label: "Weapon",
          key: "weapon",
          width: "35%",
        },
        {
          label: "Grand Slams",
          key: "slams",
          width: "13%",
          sortable: true,
          // Only use this approach for trusted input that you control
          renderFn: (value) => `<td>${value}<span class="mis6">🏆</span></td>`,
        },
        {
          label: "Birthdate",
          key: "birthdate",
          sortable: true,
          sortFn: (a, b) => {
            // Naive date comparisons; but we're controlling data so ;-)
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
      ],
    };
  },
};
</script>
<template>
  <section class="mbs24 mbe16">
    <Table
      :rows="rows"
      :headers="headers"
      :isHoverable="true"
      caption="My caption test"
    />
  </section>
</template>
