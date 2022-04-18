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
      <p className="mbs24 mbe14">Kebab with <code>type='kebab'</code></p>
      <Menu
        id="kebab1"
        type="kebab"
        menuItems={[
          <MenuItem>Andre Agassi</MenuItem>,
          <MenuItem>Serena Williams</MenuItem>,
          <MenuItem isDisabled>Rafael Nadal</MenuItem>,
          <MenuItem>Roger Federer</MenuItem>,
          <MenuItem>Althea Gibson</MenuItem>,
          <MenuItem>Bjorn Borg</MenuItem>,
        ]}
      />
      <p className="mbs24 mbe14">Kebab on right. Set <code>isItemsRight</code> if you'd like
      the menu items to align flush to right side of the trigger button. Probabaly also wrap it
      in a container that has the utility classes <code>flex justify-end</code> applied.</p>
      <div className="flex justify-end">
        <Menu
          id="kebab2"
          type="kebab"
          isItemsRight
          menuItems={[
            <MenuItem>Andre Agassi</MenuItem>,
            <MenuItem>Serena Williams</MenuItem>,
            <MenuItem isDisabled>Rafael Nadal</MenuItem>,
            <MenuItem>Roger Federer</MenuItem>,
            <MenuItem>Althea Gibson</MenuItem>,
            <MenuItem>Bjorn Borg</MenuItem>,
          ]}
        />
      </div>
      <p className="mbs24 mbe14">Meatball with <code>type='meatball'</code></p>
      <Menu
        id="meatball1"
        type="meatball"
        menuItems={[
          <MenuItem>Andre Agassi</MenuItem>,
          <MenuItem>Serena Williams</MenuItem>,
          <MenuItem isDisabled>Rafael Nadal</MenuItem>,
          <MenuItem>Roger Federer</MenuItem>,
          <MenuItem>Althea Gibson</MenuItem>,
          <MenuItem>Bjorn Borg</MenuItem>,
        ]}
      />
      <p className="mbs24 mbe14">Meatball on right. Set <code>isItemsRight</code> if you'd like
      the menu items to align flush to right side of the trigger button. Probabaly also wrap it
      in a container that has the utility classes <code>flex justify-end</code> applied.</p>
      <div className="flex justify-end">
        <Menu
          id="meatball2"
          type="meatball"
          isItemsRight
          menuItems={[
            <MenuItem>Andre Agassi</MenuItem>,
            <MenuItem>Serena Williams</MenuItem>,
            <MenuItem isDisabled>Rafael Nadal</MenuItem>,
            <MenuItem>Roger Federer</MenuItem>,
            <MenuItem>Althea Gibson</MenuItem>,
            <MenuItem>Bjorn Borg</MenuItem>,
          ]}
        />
      </div>
      <p className="mbs24 mbe14">Hamburger with <code>type='hamburger'</code></p>
      <Menu
        id="hamburger1"
        type="hamburger"
        menuItems={[
          <MenuItem>Andre Agassi</MenuItem>,
          <MenuItem>Serena Williams</MenuItem>,
          <MenuItem isDisabled>Rafael Nadal</MenuItem>,
          <MenuItem>Roger Federer</MenuItem>,
          <MenuItem>Althea Gibson</MenuItem>,
          <MenuItem>Bjorn Borg</MenuItem>,
        ]}
      />
      <p className="mbs24 mbe14">Burger on right. Set <code>isItemsRight</code> if you'd like
      the menu items to align flush to right side of the trigger button. Probabaly also wrap it
      in a container that has the utility classes <code>flex justify-end</code> applied.</p>
      <div className="flex justify-end">
        <Menu
          id="hamburger2"
          type="hamburger"
          isItemsRight
          menuItems={[
            <MenuItem>Andre Agassi</MenuItem>,
            <MenuItem>Serena Williams</MenuItem>,
            <MenuItem isDisabled>Rafael Nadal</MenuItem>,
            <MenuItem>Roger Federer</MenuItem>,
            <MenuItem>Althea Gibson</MenuItem>,
            <MenuItem>Bjorn Borg</MenuItem>,
          ]}
        />
      </div>
    </section>
  );
}
