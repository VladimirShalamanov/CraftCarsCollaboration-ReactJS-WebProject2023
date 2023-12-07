import { Link } from "react-router-dom";
import Path from "../../utils/paths";

import "./pageNotFound.css";

export default function PageNotFound() {
    return (
        <div>
            <div class="container-error">
                <div class="row">
                    <div class="col-md-12">
                        <div class="pull-right">
                            <div class="col-md-10 col-md-offset-1 pull-right">
                                <img class="img-error" src="https://bootdey.com/img/Content/fdfadfadsfadoh.png" />
                                <h2>404 Not Found</h2>
                                <p>Sorry, an error has occured, Requested page not found!</p>
                                <div class="error-actions">
                                    <Link to={Path.Home} class="btn btn-primary btn-lg">
                                        <span class="glyphicon glyphicon-arrow-left"></span>
                                        Back Home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};