/**
 * 一個販賣機的lab 來說明 redux 怎麼使用
 * 『人』
 *  操作: Action
 * 『控制面板』: Reducer
 * 『販賣機』掉出飲料：Store
 */
console.log("販賣機lab for redux!");

const redux = require("redux");
const createStore = redux.createStore;

// action ==> intenstion, the act will be perform
const BUY_COKE = "BUY_COKE";
const BUY_SPRITE = "BUY_SPRITE";
const BUY_FANTA = "BUY_FANTA";
const action1 = {
  type: BUY_COKE,
  info: "my first redux action",
};
const action2 = {
  type: BUY_SPRITE,
  info: "my 2nd redux action",
};
const action3 = {
  type: BUY_FANTA,
  info: "my 3rd redux action",
};

// action creator
function buyCoke() {
  return action1;
}
function buySprite() {
  return action2;
}
function buyFanta() {
  return action3;
}

// store ==> state management，對一個App而言只會有一個store
const initialState = {
  numOfCokes: 100,
  numOfSprites: 100,
  numOfFantas: 50,
};

// reducer ==> connect store & action, receive action, perform something in store, return a "new" state
// reducer is a pure function, 可以在任何地方呼叫
// 給予 舊的值，會 return 新的值
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_COKE:
      return {
        ...state,
        numOfCokes: state.numOfCokes - 1,
        //numOfSprites: state.numOfSprites // 數量一多就麻煩了，要改用 ...
      };
    case BUY_SPRITE:
      return {
        ...state,
        numOfSprites: state.numOfSprites - 1,
      };
    case BUY_FANTA:
      return {
        ...state,
        numOfFantas: state.numOfFantas - 1,
      };
    default:
      // 這個 default 很重要，一定要寫！不然會狂報錯！！當以上皆非時，就直接回傳state
      return state;
  }
};

// store ==> state management
const store = createStore(reducer); // OK! redux 的 store 建立完成！
console.log("initial state, coke=", store.getState()); // 主動地透過 getState() 取得 state 內容
// 註冊一個監聽動作，當 state有改變時，被動地接收 state 異動資訊
unsubscribeDB = store.subscribe(() => {
  console.log("log something to DB::", store.getState());
});
unsubscribe1 = store.subscribe(() => {
  console.log("monitor change, state=", store.getState());
});

// perform something in store
console.log("David buy a coke");
store.dispatch(buyCoke());
console.log("John buy two cokes, two fantas");
store.dispatch(buyCoke());
store.dispatch(buyCoke());
store.dispatch(buyFanta());
store.dispatch(buyFanta());
unsubscribe1(); // 取消監聽1
unsubscribe2 = store.subscribe(() => {
  console.log("** change, state=", store.getState());
}); // 改用新的監聽
console.log("Mary buy 2 cokes, 3 sprits:");
store.dispatch(buyCoke());
store.dispatch(buyCoke());
store.dispatch(buySprite());
store.dispatch(buySprite());
store.dispatch(buySprite());
unsubscribe2(); // 取消監聽2
unsubscribeDB(); // 取消監聽DB
