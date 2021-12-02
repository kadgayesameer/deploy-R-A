import React from 'react'

export const FormSampleComponent = () => {
    return (
        <>
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                    <div className="main-body">
                        <div className="page-wrapper">
                            {/* <!-- Page-header start --> */}
                            <div className="page-header card">
                                <div className="row align-items-end">
                                    <div className="col-lg-8">
                                        <div className="page-header-title">
                                            <i className="icofont icofont-file-code bg-c-blue"></i>
                                            <div className="d-inline">
                                                <h4>Basic Form Inputs</h4>
                                                <span>Lorem ipsum dolor sit <code>amet</code>, consectetur adipisicing elit</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="page-header-breadcrumb">
                                            <ul className="breadcrumb-title">
                                                <li className="breadcrumb-item">
                                                    <a href="index.html">
                                                        <i className="icofont icofont-home"></i>
                                                    </a>
                                                </li>
                                                <li className="breadcrumb-item"><a href="#!">Form Components</a>
                                                </li>
                                                <li className="breadcrumb-item"><a href="#!">Form Components</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="page-body">
                                <div className="row">
                                    <div className="col-sm-12">

                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Basic Form Inputs</h5>
                                                <span>Add className of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>
                                                <div className="card-header-right"><i
                                                    className="icofont icofont-spinner-alt-5"></i></div>

                                                <div className="card-header-right">
                                                    <i className="icofont icofont-spinner-alt-5"></i>
                                                </div>

                                            </div>
                                            <div className="card-block">
                                                <h4 className="sub-title">Basic Inputs</h4>
                                                <form>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Simple Input</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Placeholder</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control"
                                                                placeholder="Type your title in Placeholder" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Password</label>
                                                        <div className="col-sm-10">
                                                            <input type="password" className="form-control"
                                                                placeholder="Password input" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Read only</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control"
                                                                placeholder="You can't change me" readonly />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Disable Input</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control"
                                                                placeholder="Disabled text" disabled />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Predefine
                                                            Input</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control"
                                                                value="Enter yout content after me" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Select Box</label>
                                                        <div className="col-sm-10">
                                                            <select name="select" className="form-control">
                                                                <option value="opt1">Select One Value Only</option>
                                                                <option value="opt2">Type 2</option>
                                                                <option value="opt3">Type 3</option>
                                                                <option value="opt4">Type 4</option>
                                                                <option value="opt5">Type 5</option>
                                                                <option value="opt6">Type 6</option>
                                                                <option value="opt7">Type 7</option>
                                                                <option value="opt8">Type 8</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Round Input</label>
                                                        <div className="col-sm-10">
                                                            <input type="text"
                                                                className="form-control form-control-round"
                                                                placeholder=".form-control-round" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Maximum
                                                            Length</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control"
                                                                placeholder="Content must be in 6 characters"
                                                                maxlength="6" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Disable
                                                            Autocomplete</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control"
                                                                placeholder="Autocomplete Off"
                                                                autocomplete="off" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Static Text</label>
                                                        <div className="col-sm-10">
                                                            <div className="form-control-static">Hello !... This is
                                                                static text
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Color</label>
                                                        <div className="col-sm-10">
                                                            <input type="color" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Upload File</label>
                                                        <div className="col-sm-10">
                                                            <input type="file" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Textarea</label>
                                                        <div className="col-sm-10">
                                                            <textarea rows="5" cols="5" className="form-control"
                                                                placeholder="Default textarea" />
                                                        </div>
                                                    </div>
                                                </form>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <h4 className="sub-title">Input Sizes</h4>
                                                        <form>
                                                            <div className="form-group row">
                                                                <div className="col-sm-12">
                                                                    <input type="text"
                                                                        className="form-control form-control-lg"
                                                                        placeholder=".form-control-lg" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-10">
                                                                    <input type="text" className="form-control"
                                                                        placeholder=".form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-8">
                                                                    <input type="text"
                                                                        className="form-control form-control-sm"
                                                                        placeholder=".form-control-sm" />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="col-sm-6 mobile-inputs">
                                                        <h4 className="sub-title">Color Inputs</h4>
                                                        <form>
                                                            <div className="form-group">
                                                                <input type="text"
                                                                    className="form-control form-control-primary"
                                                                    placeholder=".form-control-primary" />
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-6">
                                                                    <input type="text"
                                                                        className="form-control form-control-warning"
                                                                        placeholder=".form-control-warning" />
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <input type="text"
                                                                        className="form-control form-control-default"
                                                                        placeholder=".form-control-default" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-6">
                                                                    <input type="text"
                                                                        className="form-control form-control-danger"
                                                                        placeholder=".form-control-danger" />
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <input type="text"
                                                                        className="form-control form-control-success"
                                                                        placeholder=".form-control-success" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-6">
                                                                    <input type="text"
                                                                        className="form-control form-control-inverse"
                                                                        placeholder=".form-control-inverse" />
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <input type="text"
                                                                        className="form-control form-control-info"
                                                                        placeholder=".form-control-info" />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6 mobile-inputs">
                                                        <h4 className="sub-title">Text-color</h4>
                                                        <form>
                                                            <div className="form-group">
                                                                <input type="text"
                                                                    className="form-control form-txt-primary"
                                                                    placeholder=".form-txt-primary" />
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-6">
                                                                    <input type="text"
                                                                        className="form-control form-txt-warning"
                                                                        placeholder=".form-txt-warning" />
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <input type="text"
                                                                        className="form-control form-txt-default"
                                                                        placeholder=".form-txt-default" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-6">
                                                                    <input type="text"
                                                                        className="form-control form-txt-danger"
                                                                        placeholder=".form-txt-danger" />
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <input type="text"
                                                                        className="form-control form-txt-success"
                                                                        placeholder=".form-txt-success" />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-sm-6">
                                                                    <input type="text"
                                                                        className="form-control form-txt-inverse"
                                                                        placeholder=".form-txt-inverse" />
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <input type="text"
                                                                        className="form-control form-txt-info"
                                                                        placeholder=".form-txt-info" />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="col-sm-6 mobile-inputs">
                                                        <h4 className="sub-title">Background-color</h4>
                                                        <form>
                                                            <div className="form-group">
                                                                <input type="text"
                                                                    className="form-control form-bg-primary"
                                                                    placeholder=".form-bg-primary" />
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-6">
                                                                    <input type="text"
                                                                        className="form-control form-bg-warning"
                                                                        placeholder=".form-bg-warning" />
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <input type="text"
                                                                        className="form-control form-bg-default"
                                                                        placeholder=".form-bg-default" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-6">
                                                                    <input type="text"
                                                                        className="form-control form-bg-danger"
                                                                        placeholder=".form-bg-danger" />
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <input type="text"
                                                                        className="form-control form-bg-success"
                                                                        placeholder=".form-bg-success" />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-sm-6">
                                                                    <input type="text"
                                                                        className="form-control form-bg-inverse"
                                                                        placeholder=".form-bg-inverse" />
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <input type="text"
                                                                        className="form-control form-bg-info"
                                                                        placeholder=".form-bg-info" />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Basic Form Inputs card end -->
                                                                        <!-- Input Grid card start --> */}
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Input Grid</h5>
                                                <span>Add className of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>

                                            </div>
                                            <div className="card-block">
                                                <h4 className="sub-title">Basic Inputs</h4>
                                                <form>
                                                    <div className="form-group row">
                                                        <div className="col-sm-1">
                                                            <input type="text" className="form-control"
                                                                placeholder="col-sm-1" />
                                                        </div>
                                                        <div className="col-sm-11">
                                                            <input type="text" className="form-control"
                                                                placeholder="col-sm-11" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col-sm-2">
                                                            <input type="text" className="form-control"
                                                                placeholder="col-sm-2" />
                                                        </div>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control"
                                                                placeholder="col-sm-10" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col-sm-3">
                                                            <input type="text" className="form-control"
                                                                placeholder="col-sm-3" />
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <input type="text" className="form-control"
                                                                placeholder="col-sm-9" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col-sm-4">
                                                            <input type="text" className="form-control"
                                                                placeholder="col-sm-4" />
                                                        </div>
                                                        <div className="col-sm-8">
                                                            <input type="text" className="form-control"
                                                                placeholder="col-sm-8" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col-sm-5">
                                                            <input type="text" className="form-control"
                                                                placeholder="col-sm-5" />
                                                        </div>
                                                        <div className="col-sm-7">
                                                            <input type="text" className="form-control"
                                                                placeholder="col-sm-7" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control"
                                                                placeholder="col-sm-6" />
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control"
                                                                placeholder="col-sm-6" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col-sm-12">
                                                            <input type="text" className="form-control"
                                                                placeholder="col-sm-12" />
                                                        </div>
                                                    </div>
                                                </form>
                                                <h4 className="sub-title">Flex Inputs</h4>
                                                <form>
                                                    <div className="form-group row">
                                                        <div className="col">
                                                            <input type="text" className="form-control" placeholder="col" />
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <input type="text" className="form-control"
                                                                placeholder="col-sm-4" />
                                                        </div>
                                                        <div className="col">
                                                            <input type="text" className="form-control" placeholder="col" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col">
                                                            <input type="text" className="form-control" placeholder="col" />
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control"
                                                                placeholder="col-sm-6" />
                                                        </div>
                                                        <div className="col">
                                                            <input type="text" className="form-control" placeholder="col" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col-sm-8">
                                                            <input type="text" className="form-control"
                                                                placeholder="col-sm-8" />
                                                        </div>
                                                        <div className="col">
                                                            <input type="text" className="form-control" placeholder="col" />
                                                        </div>
                                                        <div className="col">
                                                            <input type="text" className="form-control" placeholder="col" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col">
                                                            <input type="text" className="form-control" placeholder="col" />
                                                        </div>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control"
                                                                placeholder="col-sm-10" />
                                                        </div>
                                                        <div className="col">
                                                            <input type="text" className="form-control" placeholder="col" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Input Validation</h5>
                                                <span>Add className of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>
                                                <div className="card-header-right"><i
                                                    className="icofont icofont-spinner-alt-5"></i></div>
                                            </div>
                                            <div className="card-block">
                                                <h4 className="sub-title">Input Validation</h4>
                                                <div className="form-group has-success row">
                                                    <div className="col-sm-2">
                                                        <label className="col-form-label" for="inputSuccess1">Input with
                                                            success</label>
                                                    </div>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control form-control-success"
                                                            id="inputSuccess1" />
                                                        <div className="col-form-label">Success! You've done it.</div>
                                                    </div>
                                                </div>
                                                <div className="form-group has-warning row">
                                                    <div className="col-sm-2">
                                                        <label className="col-form-label" for="inputWarning1">Input with
                                                            warning</label>
                                                    </div>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control form-control-warning"
                                                            id="inputWarning1" />
                                                        <div className="col-form-label">Shucks, check the formatting of that
                                                            and try again.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group has-danger row">
                                                    <div className="col-sm-2">
                                                        <label className="col-form-label" for="inputDanger1">Input with
                                                            danger</label>
                                                    </div>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control form-control-danger"
                                                            id="inputDanger1" />
                                                        <div className="col-form-label">Sorry, that username's taken. Try
                                                            another?
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Input Validation card end -->
                                                                                        <!-- Input Alignment card start --> */}
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Input Alignment</h5>
                                                <span>Add className of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>
                                                <div className="card-header-right"><i
                                                    className="icofont icofont-spinner-alt-5"></i></div>
                                            </div>
                                            <div className="card-block">
                                                <form>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Normal Text</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control form-control-normal"
                                                                placeholder=".form-control-normal" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Bold Text</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control form-control-bold"
                                                                placeholder=".form-control-bold" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Capitalize Text</label>
                                                        <div className="col-sm-10">
                                                            <input type="text"
                                                                className="form-control form-control-capitalize"
                                                                placeholder=".form-control-capitalize" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Uppercase Text</label>
                                                        <div className="col-sm-10">
                                                            <input type="text"
                                                                className="form-control form-control-uppercase"
                                                                placeholder=".form-control-uppercase" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Lowercase Text</label>
                                                        <div className="col-sm-10">
                                                            <input type="text"
                                                                className="form-control form-control-lowercase"
                                                                placeholder=".form-control-lowercase" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Varient Text</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control form-control-variant"
                                                                placeholder=".form-control-variant" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Left-Align Text</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control form-control-left"
                                                                placeholder=".form-control-left" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Center-Align Text</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control form-control-center"
                                                                placeholder=".form-control-center" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Right-Align Text</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control form-control-right"
                                                                placeholder=".form-control-right" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">RTL Text</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control form-control-rtl"
                                                                placeholder=".form-control-rtl" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div id="styleSelector"></div>
                </div>
            </div>
        </>
    )
}
