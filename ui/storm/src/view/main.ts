import { h } from 'snabbdom'
import { VNode } from 'snabbdom/vnode';
import StormCtrl from '../ctrl';
import renderClock from './clock';
import chessground from './chessground';
// import { MaybeVNodes, StormPuzzle } from '../interfaces';

export default function(ctrl: StormCtrl): VNode {
  return h('main.storm', [
    h('div.storm__board.main-board', [
      chessground(ctrl),
      ctrl.promotion.view()
    ]),
    h('div.storm__side', [
      renderClock(ctrl)
    ])
  ]);
}