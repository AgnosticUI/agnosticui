# Disclose

The `Disclose` component is often used as a supplemental button to Disclose things.

<div class="mbs24"></div>

## Usage

To use AgnosticUI as a CSS only framework, you can simply link to the `common.min.css` and `components.min.css` files. These can be served from a CDN (as you'll see in the following example), or relative to your project.

## Disclose

<!-- Default -->
<details class="disclose" open>
  <summary class="disclose-title">Roger Federer</summary>
  <div class="disclose-panel">
    Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the Association of Tennis
    Professionals. He has won 20 Grand Slam men's singles titles, an all-time record shared with Rafael Nadal and Novak
    Djokovic. Wikipedia
  </div>
</details>
<details class="disclose">
  <summary class="disclose-title">Serena Williams</summary>
  <div class="disclose-panel">
    Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam singles titles, the most
    by any player in the Open Era, and the second-most of all time behind Margaret Court. The Women's Tennis Association
    ranked her singles world No. 1 on eight separate occasions between 2002 and 2017. Wikipedia
  </div>
</details>
<details class="disclose">
  <summary class="disclose-title">Andre Agassi</summary>
  <div class="disclose-panel">
    Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major champion and a 1996
    Olympic gold medalist, as well as a runner-up in seven other Grand Slam tournaments. Agassi was the first man to win
    four Australian Open singles titles in the Open Era. Wikipedia
  </div>
</details>
<details class="disclose">
  <summary class="disclose-title">Stefi Graf</summary>
  <div class="disclose-panel">
    Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1 for a record 377 weeks
    and won 22 Grand Slam singles titles, which is the second-most since the introduction of the Open Era in 1968 and
    third-most of all-time behind Margaret Court and Serena Williams. Wikipedia
  </div>
</details>
<!-- Background -->
<details class="disclose disclose-bg" open>
  <summary class="disclose-title">Roger Federer</summary>
  <div class="disclose-panel">
    Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the Association of Tennis
    Professionals. He has won 20 Grand Slam men's singles titles, an all-time record shared with Rafael Nadal and Novak
    Djokovic. Wikipedia
  </div>
</details>
<details class="disclose disclose-bg">
  <summary class="disclose-title">Serena Williams</summary>
  <div class="disclose-panel">
    Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam singles titles, the most
    by any player in the Open Era, and the second-most of all time behind Margaret Court. The Women's Tennis Association
    ranked her singles world No. 1 on eight separate occasions between 2002 and 2017. Wikipedia
  </div>
</details>
<details class="disclose disclose-bg">
  <summary class="disclose-title">Andre Agassi</summary>
  <div class="disclose-panel">
    Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major champion and a 1996
    Olympic gold medalist, as well as a runner-up in seven other Grand Slam tournaments. Agassi was the first man to win
    four Australian Open singles titles in the Open Era. Wikipedia
  </div>
</details>
<details class="disclose disclose-bg">
  <summary class="disclose-title">Stefi Graf</summary>
  <div class="disclose-panel">
    Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1 for a record 377 weeks
    and won 22 Grand Slam singles titles, which is the second-most since the introduction of the Open Era in 1968 and
    third-most of all-time behind Margaret Court and Serena Williams. Wikipedia
  </div>
</details>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport"
      content="width=device-width, initial-scale=1">
    <title>Test Page</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/agnostic-css@1.0.12/public/css-dist/common.min.css">
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/agnostic-css@1.0.12/public/css-dist/components.min.css">
  </head>
  <body>
    <div class="container">
      <!-- Default -->
      <details class="disclose" open>
        <summary class="disclose-title">Roger Federer</summary>
        <div class="disclose-panel">
          Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the Association of Tennis
          Professionals. He has won 20 Grand Slam men's singles titles, an all-time record shared with Rafael Nadal and Novak
          Djokovic. Wikipedia
        </div>
      </details>
      <details class="disclose">
        <summary class="disclose-title">Serena Williams</summary>
        <div class="disclose-panel">
          Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam singles titles, the most
          by any player in the Open Era, and the second-most of all time behind Margaret Court. The Women's Tennis Association
          ranked her singles world No. 1 on eight separate occasions between 2002 and 2017. Wikipedia
        </div>
      </details>
      <details class="disclose">
        <summary class="disclose-title">Andre Agassi</summary>
        <div class="disclose-panel">
          Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major champion and a 1996
          Olympic gold medalist, as well as a runner-up in seven other Grand Slam tournaments. Agassi was the first man to win
          four Australian Open singles titles in the Open Era. Wikipedia
        </div>
      </details>
      <details class="disclose">
        <summary class="disclose-title">Stefi Graf</summary>
        <div class="disclose-panel">
          Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1 for a record 377 weeks
          and won 22 Grand Slam singles titles, which is the second-most since the introduction of the Open Era in 1968 and
          third-most of all-time behind Margaret Court and Serena Williams. Wikipedia
        </div>
      </details>
      <!-- Background -->
      <details class="disclose disclose-bg" open>
        <summary class="disclose-title">Roger Federer</summary>
        <div class="disclose-panel">
          Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the Association of Tennis
          Professionals. He has won 20 Grand Slam men's singles titles, an all-time record shared with Rafael Nadal and Novak
          Djokovic. Wikipedia
        </div>
      </details>
      <details class="disclose disclose-bg">
        <summary class="disclose-title">Serena Williams</summary>
        <div class="disclose-panel">
          Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam singles titles, the most
          by any player in the Open Era, and the second-most of all time behind Margaret Court. The Women's Tennis Association
          ranked her singles world No. 1 on eight separate occasions between 2002 and 2017. Wikipedia
        </div>
      </details>
      <details class="disclose disclose-bg">
        <summary class="disclose-title">Andre Agassi</summary>
        <div class="disclose-panel">
          Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major champion and a 1996
          Olympic gold medalist, as well as a runner-up in seven other Grand Slam tournaments. Agassi was the first man to win
          four Australian Open singles titles in the Open Era. Wikipedia
        </div>
      </details>
      <details class="disclose disclose-bg">
        <summary class="disclose-title">Stefi Graf</summary>
        <div class="disclose-panel">
          Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1 for a record 377 weeks
          and won 22 Grand Slam singles titles, which is the second-most since the introduction of the Open Era in 1968 and
          third-most of all-time behind Margaret Court and Serena Williams. Wikipedia
        </div>
      </details>
      </details>
    </div>
  </body>
</html>
```
