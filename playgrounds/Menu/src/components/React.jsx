import "agnostic-react/dist/esm/index.css";
import { Menu, MenuItem, } from "agnostic-react";

export default function ReactAlert() {
  return (
    <section className="mbe40">
      <div className="h4 mbe32 flex items-center">
        <img width="24" height="24" src="/assets/React-icon.svg" alt="React logo" className="mie12" />React Close
      </div>
      <p className="mbs24 mbe14">Default Menu</p>
      <Menu
        id="react-menu1"
        buttonLabel="Players"
        onOpen={(selectedItem) => console.log('onOpen - selectedItem: ', selectedItem)}
        onClose={() => console.log('onClose called...')}
        menuItems={[
          <MenuItem>Andre Agassi</MenuItem>,
          <MenuItem>Serena Williams</MenuItem>,
          <MenuItem isDisabled>Rafael Nadal</MenuItem>,
          <MenuItem>Roger Federer</MenuItem>,
          <MenuItem>Althea Gibson</MenuItem>,
          <MenuItem>Bjorn Borg</MenuItem>,
        ]}
      />
      <p className="mbs24 mbe14"><code>closeOnClickOutside</code> set to false</p>
      <Menu
        closeOnClickOutside={false}
        id="react-menu2"
        buttonLabel="Players"
        menuItems={[
          <MenuItem>Andre Agassi</MenuItem>,
          <MenuItem>Serena Williams</MenuItem>,
          <MenuItem isDisabled>Rafael Nadal</MenuItem>,
          <MenuItem>Roger Federer</MenuItem>,
          <MenuItem>Althea Gibson</MenuItem>,
          <MenuItem>Bjorn Borg</MenuItem>,
        ]}
      />
      <p className="mbs24 mbe14"><code>closeOnSelect</code> set to false</p>
      <Menu
        closeOnSelect={false}
        id="react-menu3"
        buttonLabel="Players"
        menuItems={[
          <MenuItem>Andre Agassi</MenuItem>,
          <MenuItem>Serena Williams</MenuItem>,
          <MenuItem isDisabled>Rafael Nadal</MenuItem>,
          <MenuItem>Roger Federer</MenuItem>,
          <MenuItem>Althea Gibson</MenuItem>,
          <MenuItem>Bjorn Borg</MenuItem>,
        ]}
      />
      <p className="mbs24 mbe14">Stays open on click outside or select with: <code>closeOnSelect</code> &amp; <code>closeOnClickOutside</code> set to false</p>
      <Menu
        closeOnSelect={false}
        closeOnClickOutside={false}
        id="react-menu4"
        buttonLabel="Players"
        menuItems={[
          <MenuItem>Andre Agassi</MenuItem>,
          <MenuItem>Serena Williams</MenuItem>,
          <MenuItem isDisabled>Rafael Nadal</MenuItem>,
          <MenuItem>Roger Federer</MenuItem>,
          <MenuItem>Althea Gibson</MenuItem>,
          <MenuItem>Bjorn Borg</MenuItem>,
        ]}
      />
      <p className="mbs24 mbe14">small with: <code>size="small"</code></p>
      <Menu
        id="react-menu5"
        size="small"
        buttonLabel="Players"
        menuItems={[
          <MenuItem>Andre Agassi</MenuItem>,
          <MenuItem>Serena Williams</MenuItem>,
          <MenuItem isDisabled>Rafael Nadal</MenuItem>,
          <MenuItem>Roger Federer</MenuItem>,
          <MenuItem>Althea Gibson</MenuItem>,
          <MenuItem>Bjorn Borg</MenuItem>,
        ]}
      />
      <p className="mbs24 mbe14">Large with: <code>size="large"</code></p>
      <Menu
        id="react-menu6"
        size="large"
        buttonLabel="Players"
        menuItems={[
          <MenuItem>Andre Agassi</MenuItem>,
          <MenuItem>Serena Williams</MenuItem>,
          <MenuItem isDisabled>Rafael Nadal</MenuItem>,
          <MenuItem>Roger Federer</MenuItem>,
          <MenuItem>Althea Gibson</MenuItem>,
          <MenuItem>Bjorn Borg</MenuItem>,
        ]}
      />
      <p className="mbs24 mbe14">Rounded with: <code>isRounded</code></p>
      <Menu
        isRounded
        id="react-menu7"
        size="large"
        buttonLabel="Players"
        menuItems={[
          <MenuItem>Andre Agassi</MenuItem>,
          <MenuItem>Serena Williams</MenuItem>,
          <MenuItem isDisabled>Rafael Nadal</MenuItem>,
          <MenuItem>Roger Federer</MenuItem>,
          <MenuItem>Althea Gibson</MenuItem>,
          <MenuItem>Bjorn Borg</MenuItem>,
        ]}
      />
      <p className="mbs24 mbe14">Bordered with <code>isBordered</code></p>
      <Menu
        isBordered
        id="react-menu8"
        size="large"
        buttonLabel="Players"
        menuItems={[
          <MenuItem>Andre Agassi</MenuItem>,
          <MenuItem>Serena Williams</MenuItem>,
          <MenuItem isDisabled>Rafael Nadal</MenuItem>,
          <MenuItem>Roger Federer</MenuItem>,
          <MenuItem>Althea Gibson</MenuItem>,
          <MenuItem>Bjorn Borg</MenuItem>,
        ]}
      />
    </section>
  );
}
