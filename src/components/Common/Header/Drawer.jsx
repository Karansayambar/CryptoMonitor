import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import "./style.css";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
          <Button onClick={() => setOpen(true)}>
            <MenuIcon className="link"/>
          </Button>
          <Drawer
            anchor={'right'}
            open={open}
            onClose={() => setOpen(false)}
          >
            <div className='drawer'>
                <Link to="/"><p className="link">Home</p></Link>
                <Link to="/wishlist"><p className="link">WishList</p></Link>
                <Link to="/shop"><p className="link">Shop</p></Link>
                <Link to="/dashboard"><p className="link">Compare</p></Link>
                <Link to="/"><Button text="Dashboard" onClick={() => console.log("click")}/></Link>
            </div>

          </Drawer>
    </div>
  );
}
