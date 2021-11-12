import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { DiscloseComponent } from './disclose.component';
import { AgModule } from 'agnostic-angular';

export default {
  title: 'AG—Angular (Beta)/Disclose',
  component: DiscloseComponent,
  decorators: [
    moduleMetadata({
      imports: [AgModule],
    }),
  ],
} as Meta;

export const All = () => ({
  template: `<div class="mbe48">
    <h3>Single</h3>
    <p class="mbs16 mbe24">Here's an example of a single disclose:</p>
    <ag-disclose title="Who is better Djokovic or Federer?">
      They have played 50 matches between 2006 and 2020, with Djokovic leading
      head-to-head 27–23. Djokovic leads 13–6 in finals and 11–6 in Grand Slam
      matches. These 17 Grand Slam matches are the most ever contested between two
      players (tied with Djokovic–Nadal). Five of them were finals, and a record
      11 were in semifinals. To date, Djokovic is the only man to have beaten
      Federer at all four majors and likewise Federer is the only player to defeat
      Djokovic at all four of them (Wikipedia).
    </ag-disclose>
  </div>

  <div class="mbe48">
    <h3>Multiple</h3>
    <p class="mbs16 mbe24">Multiple disclose elements can be stacked to achieve a
      progressively disclosed pattern that resembles an Accordion pattern. Further,
      individual disclosed elements may be open by default if we supply the
      <code>isOpen</code> prop as we do in the first disclose element below:</p>
    <ag-disclose isOpen="true" title="Roger Federer">
      Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the Association of Tennis
      Professionals. He has won 20 Grand Slam men's singles titles, an all-time record shared with Rafael Nadal and Novak
      Djokovic (Wikipedia).
    </ag-disclose>
    <ag-disclose title="Serena Williams">
      Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam singles titles, the most
      by any player in the Open Era, and the second-most of all time behind Margaret Court. The Women's Tennis Association
      ranked her singles world No. 1 on eight separate occasions between 2002 and 2017.(Wikipedia).
    </ag-disclose>
    <ag-disclose title="Stefi Graf">
      Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1 for a record 377 weeks
      and won 22 Grand Slam singles titles, which is the second-most since the introduction of the Open Era in 1968 and
      third-most of all-time behind Margaret Court and Serena Williams (Wikipedia).
    </ag-disclose>
    <ag-disclose title="Andre Agassi">
      Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major champion and a 1996
      Olympic gold medalist, as well as a runner-up in seven other Grand Slam tournaments. Agassi was the first man to win
      four Australian Open singles titles in the Open Era (Wikipedia).
    </ag-disclose>
  </div>

  <div>
    <h3>Background</h3>
    <p class="mbs16 mbe24">The earlier example favors using a &ldquo;clean&rdquo; if minimalist style. However,
      there may be use cases that that require a stronger visual affordance for disclose elements themeselves.
      If that's the case, you can utilize the <code>isBackground</code> prop which achieve the following:</p>
    <ag-disclose isBackground="true" title="Roger Federer">
      Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the Association of Tennis
      Professionals. He has won 20 Grand Slam men's singles titles, an all-time record shared with Rafael Nadal and Novak
      Djokovic (Wikipedia).
    </ag-disclose>
    <ag-disclose isBackground="true"  title="Serena Williams">
      Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam singles titles, the most
      by any player in the Open Era, and the second-most of all time behind Margaret Court. The Women's Tennis Association
      ranked her singles world No. 1 on eight separate occasions between 2002 and 2017.(Wikipedia).
    </ag-disclose>
    <ag-disclose isBackground="true"  title="Stefi Graf">
      Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1 for a record 377 weeks
      and won 22 Grand Slam singles titles, which is the second-most since the introduction of the Open Era in 1968 and
      third-most of all-time behind Margaret Court and Serena Williams (Wikipedia).
    </ag-disclose>
    <ag-disclose isBackground="true"  title="Andre Agassi">
      Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major champion and a 1996
      Olympic gold medalist, as well as a runner-up in seven other Grand Slam tournaments. Agassi was the first man to win
      four Australian Open singles titles in the Open Era (Wikipedia).
    </ag-disclose>
  </div>`,
});
