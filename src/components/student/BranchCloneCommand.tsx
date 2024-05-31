import * as React from "react";
import {Button, Card} from "react-bootstrap";
import "./Checkpoints.css"
import Branch from "../../objects/Branch";

const BranchCloneCommand = (props: {branch: Branch}) => {

    const branch = props.branch;

    return(

        <div id="branchClone" className="">

            <Card className="checkpoint">
                <Card.Header>
                    Commands to clone the project
                </Card.Header>
                <Card.Body>

                    <textarea readOnly rows={3}
                              value={branch.getCommand()}>
                                </textarea><br />
                    <Button onClick={() => {
                        navigator.clipboard.writeText(branch.getCommand());  //copy git command
                    }
                    }>Copy</Button>
                </Card.Body>
            </Card>
        </div>
    );

}

export default BranchCloneCommand;
