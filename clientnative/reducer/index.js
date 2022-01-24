import axios from "axios";
import {
  GET_PRICE_QUOTE,
  POST_REQUEST_TRAVE,
  GET_TRAVELS,
  GET_TRAVEL_ID,
  SOCKET,
} from "../actions/index.js";

const initialState = {
  //hago un estado inicial
  registrarUsuario: null,
  logiarUsuario: null,
  responseReg: null,
  responseLog: null,
  completeprofile: [],
  completeCarrier: [],
  price: null,
  responseTravel: null,
  travels: [],
  travel: null,
  token: "",
  respToken: {},
  editPassword: [],
  socket: null,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "REGISTRO":
      return {
        ...state,
        registrarUsuario: action.payload, //en registrarusuario meteme el action.payload
      };
    case "LOGEO":
      return {
        ...state,
        logiarUsuario: action.payload, //en registrarusuario meteme el action.payload
      };
    case "REGISTROO":
      return {
        ...state,
        responseReg: action.payload, //en registrarusuario meteme el action.payload
      };
    case "LOGEOO":
      return {
        ...state,
        responseLog: action.payload, //en registrarusuario meteme el action.payload
        token: action.token,
      };
    case GET_PRICE_QUOTE:
      return {
        ...state,
        price: action.payload,
      };
    case POST_REQUEST_TRAVE:
      return {
        ...state,
        responseTravel: action.payload,
      };
    case GET_TRAVELS:
      return {
        ...state,
        travels: action.payload,
      };
    case GET_TRAVEL_ID:
      return {
        ...state,
        travel: action.payload,
      };
    case "TOKEN":
      return {
        ...state,
        respToken: action.payload,
        responseLog: action.payload,
      };
    case "CHANGE_PASSWORD":
      return {
        ...state,
        editPassword: action.payload
      };
    case SOCKET:
      return {
        ...state,
        socket: action.payload
      }
    default:
      return state;
  }
}
