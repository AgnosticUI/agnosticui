<script>
  import { Table } from "agnostic-svelte";
  import { Pagination } from "agnostic-svelte";
  import { usePagination } from "agnostic-helpers/dist/index.esm";
  import TableCustomRenderComponent from "./TableCustomRenderComponent.svelte";

  const createRow = (name, weapon, slams, birthdate) => ({
    name,
    weapon,
    slams,
    birthdate,
  });

  const tableArgs = {
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
        width: "45%",
      },
      {
        label: "Grand Slams",
        key: "slams",
        width: "10%",
        sortable: true,
        renderComponent: () => TableCustomRenderComponent,
      },
      {
        label: "Birthdate",
        key: "birthdate",
        width: "20%",
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
    ],
    caption: "Tennis Superstars",
  };

  const paging = usePagination({ offset: 1 });

  const pageSize = 3;
  const totalPages = Math.ceil(tableArgs.rows.length / pageSize);

  let currentPage = 1;
  $: paginationPages = paging.generate(currentPage, totalPages);

  const paginationArgs = {
    totalPages,
    onPageChange: (p) => (currentPage = p),
    navigationLabels: {
      previous: "Previa",
      next: "Siguiente",
      first: "Primera",
      last: "Última",
    },
    ariaLabel: "Pagination",
    justify: "center",
  };
</script>

<section>
  <div class="h4 mbe32 flex items-center">
    <img
      width="24"
      height="24"
      src="/assets/Svelte-icon.svg"
      alt="Svelte logo"
      class="mie12"
    />Svelte Table
  </div>
  <Table
    {...tableArgs}
    offset={(currentPage - 1) * pageSize}
    limit={pageSize}
  />
  <Pagination
    {...paginationArgs}
    pages={paginationPages}
    current={currentPage}
  />
</section>
