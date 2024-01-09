import { DrawableComponent } from "./DrawableComponent.mjs";
export class TableComponent extends DrawableComponent
{
   header;
   table;
   dataBody;
   constructor(parent)
   {
      super(document.createElement('table'), parent);
      this.Table.tHead = this.Table.createTHead();
      this.Header = this.Table.tHead.insertRow();
      this.DataBody = this.Table.createTBody();
   }

   set Header(h)
   {
      this.header = h;
   }
   /**
    * @returns {HTMLTableRowElement}
    */
   get Header()
   {
      return this.header;
   }

   set Table(t)
   {
      this.element = t;
   }
   /**
    * @returns {HTMLTableElement}
    */
   get Table()
   {
      return this.element;
   }

   set DataBody(db)
   {
      this.dataBody = db;
   }
   /**
    * @returns {HTMLTableSectionElement}
    */
   get DataBody()
   {
      return this.dataBody;
   }
   /**
    * @param {...string} headerValue 
    */
   addHeader(...headerValue)
   {
      for(let header of headerValue)
      {
         this.Header.appendChild(this.makeTableHead(header));
      }
      
   }

   /**
    * @param {number} index 
    */
   addRow(index = undefined)
   {
      return this.DataBody.insertRow(index);
   }
   /**
    * @param {HTMLTableRowElement} row row to add cell to
    */
   addCell(row, index = undefined)
   {
      return row.insertCell(index);
   }
   /**
    * @param {Array} data array of data to append.  Each element will occupy a cell.
    */
   appendData(row, data = [])
   {
      for(let i of data)
      {
         this.addCell(row).appendChild(document.createTextNode(i));
      }
   }

   selectHeaderCell(index)
   {
      return this.Header.children[index];
   }
   /**
    * @param {number} row Zero based integer of the row index
    * @param {number} column Zerobased integer of the column index
    * @returns {HTMLTableCellElement}
    */
   selectDataCell(row, column)
   {
      return this.DataBody.children[row].children[column];
   }

   test()
   {
      console.log(this, this.DataBody,this.Header);
   }
}