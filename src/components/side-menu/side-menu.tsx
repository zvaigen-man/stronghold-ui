import { FC, useEffect } from "react";
import "./side-menu.scss";
import {
  List,
  Checkbox,
  Divider,
  ListItemButton,
  FormControl,
  Select,
  InputLabel,
  OutlinedInput,
  MenuItem,
  ListItemText,
} from "@mui/material";
import { ReactComponent as HelpIcon } from "../../assets/help-icon.svg";
import { ReactComponent as HomeIcon } from "../../assets/home-icon.svg";
import { ReactComponent as ExcelIcon } from "../../assets/excel-icon.svg";
import { ReactComponent as DataIcon } from "../../assets/data-icon.svg";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names: any[] = [
  "צוויג",
  "מושיק",
  "מר רוזנברג",
  "גילי",
  "עמית",
  "עידן הגייז",
];
interface ISideMenuProps {
  setIsDrawerOpen?: (isOpen: boolean) => void;
}
export const SideMenu: FC<ISideMenuProps> = (props: ISideMenuProps) => {
  const [personName, setPersonName] = useState([]);

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div className="side-menu">
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">שם הקרנף</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="שם קרנף" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {names.map((name: any) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name as never ) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SideMenu;
