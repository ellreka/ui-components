export interface UseCarouselProps {
  /**
   * 自動でスライドさせるか
   */
  auto?: boolean
  /**
   * 何秒ごとにスライドさせるか
   */
  interval?: number
  /**
   * スライドの合計
   */
  length: number
  /**
   * ループさせるか
   */
  loop?: boolean
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
  onMouseDown?: (event: React.MouseEvent) => void
  onTouchStart?: (event: React.TouchEvent) => void
  /**
   * スライドの移動が完了したら実行される関数
   */
  onTransitionEnd: () => void
  style: React.CSSProperties
}

interface ItemProps {
  style: React.CSSProperties
}

export interface UseCarouselReturn {
  /**
   * 表示中のスライド
   */
  active: number
  configs: Required<UseCarouselProps>
  /**
   * コンテナー要素のprops
   */
  containerProps: ContainerProps
  /**
   * スライドのprops
   */
  itemProps: ItemProps
  /**
   * 表示中のスライドの位置
   */
  offset: number
  /**
   * 次のスライドへ移動する関数
   */
  onNext: () => void
  /**
   * 前のスライドへ移動する関数
   */
  onPrev: () => void
}
