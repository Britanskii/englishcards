import {useDispatch} from "react-redux";
// import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import * as ActionsCreator from "../store/actionCreators/dictionary"
import {bindActionCreators} from "redux";


const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionsCreator, dispatch)
}

export default useActions