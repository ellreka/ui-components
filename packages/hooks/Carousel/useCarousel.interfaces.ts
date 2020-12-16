export interface UseCarouselProps {
  /**
   * ループさせるか
   */
  loop?: boolean
  /**
   * 何秒ごとにスライドさせるか
   */
  interval?: number
  /**
   * 自動でスライドさせるか
   */
  auto?: boolean
  /**
   * スライドの合計
   */
  length: number
  /**
   * アクティブなスライドの前後に必要なスライドの数
   */
  show?: number
  /**
   * スワイプを許可する
   */
  swipe?: boolean
}

interface ContainerProps {
  style: React.CSSProperties
  /**
   * スライドの移動が完了したら実行される関数
   */
  onTransitionEnd: () => void
  onTouchStart?: (event: React.TouchEvent) => void
  onMouseDown?: (event: React.MouseEvent) => void
}

interface ItemProps {
  style: React.CSSProperties
}

export interface UseCarouselReturn {
  /**
   * 表示中のスライド
   */
  active: number
  /**
   * 表示中のスライドの位置
   */
  offset: number
  /**
   * コンテナー要素のprops
   */
  containerProps: ContainerProps
  /**
   * スライドのprops
   */
  itemProps: ItemProps
  /**
   * 次のスライドへ移動する関数
   */
  onNext: () => void
  /**
   * 前のスライドへ移動する関数
   */
  onPrev: () => void
  configs: Required<UseCarouselProps>
}
