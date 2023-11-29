import { useDispatch,useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil,faEraser,faRotateRight,faRotateLeft, faFileArrowDown}  from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.css' 
import cx from 'classnames';
import { menuItemClick,ac } from '@/slice/menuSlice'
import { MENU_ITEMS } from '@/constant';
const Menu = () => {
    const dispatch = useDispatch()
    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
   
    
    const handleMenuClick = (itemName) => {
        dispatch(menuItemClick(itemName))   
    }
    
    return (
        <div className={styles.menuContainer}>
            <div className={cx(styles.iconWrapper, { [styles.active]: activeMenuItem === MENU_ITEMS.PENCIL })} onClick={()=> handleMenuClick(MENU_ITEMS.PENCIL)}>
                <FontAwesomeIcon icon={faPencil} className={styles.icon}  />

            </div>
            <div  className={cx(styles.iconWrapper,{ [styles.active]: activeMenuItem === MENU_ITEMS.ERASER })} onClick={()=> handleMenuClick(MENU_ITEMS.ERASER)}>
                <FontAwesomeIcon icon={faEraser}  className={styles.icon}  />

            </div>
            <div  className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faRotateLeft} className={styles.icon}/>

            </div>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />

            </div>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />

            </div>
        </div>
    )
} 
export default Menu;