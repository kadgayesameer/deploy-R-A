import React from "react";

const DocumentList = (props) => {

    return (
      
        props.documentList.map((val, idx) => {
            props.documentData.map(datar =>{  
            
                let docName = `docName-${idx}`, imgStatus = `imgStatus-${idx}`, priority = `priority-${idx}`, compulsary = `compulsary-${idx}`
                return (
                    <tr key={val.index}>
                        <td>{idx + 1}</td>
                        <td>
                            <input type="text" className="form-control" name="docName" id={docName} data-id={idx} onChange={(props.handleEvent)} value={datar.docName} />
                        </td>
                        <td>
                            <select className="form-control" name="imgStatus" id={imgStatus} data-id={idx} onChange={(props.handleEvent)}>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </td>
                        <td>
                            <select className="form-control" name="priority" id={priority} data-id={idx} onChange={(props.handleEvent)}>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </td>
                        <td>
                            <select className="form-control" name="compulsary" id={compulsary} data-id={idx} onChange={(props.handleEvent)}>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </td>
                        <td>
                            <button className="btn btn-xs btn-grd-danger m-1" onClick={(() => props.delete(val))}><i className="fas fa-trash"></i></button>
                            {/* <button className="btn btn-xs btn-grd-primary m-1" onClick={() => this.viewDataBranch(documentData.branchId,"M")}><i className="fas fa-edit"></i></button>
                        <button className="btn btn-xs btn-grd-danger m-1" onClick={() => this.viewDataBranch(documentData.branchId,"D")}><i className="fas fa-trash"></i></button> */}
                        </td>
                    </tr>
                )
            })
        })
    )
}
export default DocumentList;