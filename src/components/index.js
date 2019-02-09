// import components styles
import './Button/styles/';
import './Modal/styles/';
import './CellItem/styles/';
import './Toast/styles/';
import './Icon/styles/';
import './Dialog/styles/';
import './Landscape/styles/';
import './Field/styles/';
import './Switch//styles/';

// import components
import Button from './Button';
import Modal from './Modal';
import CellItem from './CellItem';
import Toast from './Toast';
import Icon from './Icon';
import Dialog from './Dialog';
import Landscape from './Landscape';
import Field from './Field/';
import Switch from './Switch';

const components = {
  Button,
  ButtonGroup: Button.Group,
  Modal,
  CellItem,
  Toast,
  Icon,
  Dialog,
  Landscape,
  Field,
  Toggle: Switch,
};
export default components;
