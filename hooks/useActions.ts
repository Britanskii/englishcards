import {useDispatch} from "react-redux"
// import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import * as DictionaryActionsCreator from "../store/actionCreators/dictionary"
import * as MistakesActionsCreator from "../store/actionCreators/mistakes"
import {bindActionCreators} from "redux"


const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators({...DictionaryActionsCreator, ...MistakesActionsCreator}, dispatch)
}

export default useActions