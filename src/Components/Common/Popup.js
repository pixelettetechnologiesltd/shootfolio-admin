import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import {
  useUpdateOneGameMutation,
  useGetGameQuery,
} from "../../slices/gameApi";
import {
  useUpdateOneGameModeMutation,
  useGetGameModeQuery,
} from "../../slices/gameModeApi";
import { useUpdateOneLeagueMutation ,useLeagueGetQuery} from "../../slices/leagueAPi";
import { useGetClubQuery,useUpdateOneClubMutation } from "../../slices/clubApi";
const Popup = (props) => {
  const [formData, setFormData] = useState({});
  const [formDataMode, setFormDataMode] = useState({});
  const [formDataLeague, setFormDataLeague] = useState({});
  const [formDataClub, setFormDataClub] = useState({});
  const { refetch: refetchGameMode } = useGetGameModeQuery();
  const { refetch: refetchGame } = useGetGameQuery();
  const { refetch: refetchLeague } = useLeagueGetQuery();
  const { refetch: refetchClub } = useGetClubQuery();
  useEffect(() => {
    setFormData(props.selectedGameId);
  }, [props.selectedGameId]);
  useEffect(() => {
    setFormDataMode(props.selectedGameModeId);
  }, [props.selectedGameModeId]);
  useEffect(() => {
    setFormDataLeague(props.selectedGameLeagueId);
  }, [props.selectedGameLeagueId]);
  useEffect(() => {
    setFormDataClub(props.selectedClubId);
  }, [props.selectedClubId]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleInputChangeMode = (e) => {
    const { name, value } = e.target;
    setFormDataMode((prevFormDataMode) => ({
      ...prevFormDataMode,
      [name]: value,
    }));
  };
  //handleInputChangeLeague

  const handleInputChangeLeague = (e) => {
    const { name, value } = e.target;
    setFormDataLeague((prevFormDataLeague) => ({
      ...prevFormDataLeague,
      [name]: value,
    }));
  };

  //handleClubChange
  const handleClubChange=(e)=>{
    const { name, value } = e.target;
    setFormDataClub((prevFormDataClub) => ({
      ...prevFormDataClub,
      [name]: value,
    }));
  }

  const [updateOneGame] = useUpdateOneGameMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const title = formData.title;
      const iconUrl = formData.iconUrl;
      const quizAccess = formData.quizAccess;
      const status = formData.status;
      const res = await updateOneGame({
        id: props?.selectedGameId?._id,
        data: {
          title,
          iconUrl,
          quizAccess,
          status,
        },
      }).unwrap();
      refetchGame();
      toast.success(res?.status);
    } catch (err) {
      console.log(err);
    }
  };
  //handleSubmitGameMode
  const [updateOneGameMode] = useUpdateOneGameModeMutation();
  const handleSubmitGameMode = async (e) => {
    e.preventDefault();
    try {
      // const gameType = formDataMode.gameType;
      const modeTitle = formDataMode.modeTitle;
      const status = formDataMode.status;
      const res = await updateOneGameMode({
        id: props?.selectedGameModeId?._id,
        data: {
          // gameType,
          modeTitle,
          status,
        },
      }).unwrap();

      toast.success(res?.status);
      refetchGameMode();
    } catch (err) {
      console.log(err);
    }
  };
  
  const [updateOneLeague] = useUpdateOneLeagueMutation();
  const handleSubmitLeague =async(e)=>{
    e.preventDefault();
      const leagueTitle = formDataLeague.leagueTitle;
      const investableBudget = formDataLeague.investableBudget;
      const membershipType = formDataLeague.membershipType;
      const status = formDataLeague.status;
      try {
        const res = await updateOneLeague({
          id: props?.selectedGameLeagueId?._id,
          data:{
          leagueTitle,
          investableBudget,
          membershipType,
          status,
          }
        }).unwrap();
        refetchLeague();
        //dispatch(addGame({ ...res }));
        toast.success(res?.status);
      } catch (err) {
        console.log(err);
        toast.error(err?.data?.message || err.error);
      }
  }
  //submit Club Form   
  const [updateOneClub]=useUpdateOneClubMutation();
  const handleSubmitClub= async(e)=>{
      e.preventDefault();
      try {
        const title = formDataClub.title;
        const Symbol = formDataClub.symbol;
        const status = formDataClub.status;
        const res = await updateOneClub({
          id: props?.selectedClubId?._id,
          data: {
            // gameType,
            title,
            Symbol,
            status,
          },
        }).unwrap();
  
        toast.success(res?.status);
        refetchClub();
      } catch (err) {
        console.log(err);
      }
  }

  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Body>
          {props.view == "typeView" ? (
            <Form className="mt-5" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Control
                  style={{ padding: "0.6rem 0.6rem" }}
                  className="makefieldgightmore"
                  type="text"
                  name="title"
                  value={formData?.title || ""}
                  onChange={handleInputChange}
                  placeholder="Game Title"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Game Title.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  className="makefieldgightmore"
                  type="text"
                  name="iconUrl"
                  value={formData?.iconUrl || ""}
                  onChange={handleInputChange}
                  placeholder="Icon URL"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide an Icon URL.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  className="makefieldgightmore"
                  type="text"
                  name="quizAccess"
                  value={formData?.quizAccess || ""}
                  onChange={handleInputChange}
                  placeholder="Quiz Access"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Quiz Access.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  className="makefieldgightmore"
                  type="text"
                  name="status"
                  value={formData?.status || ""}
                  onChange={handleInputChange}
                  placeholder="Status"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Status.
                </Form.Control.Feedback>
              </Form.Group>

              <div className="makebtnsinrow">
                <div className="submitbtn">
                  <Button className="formsubmitbutton" type="submit">
                    Update
                  </Button>
                </div>
              </div>
            </Form>
          ) : props.view == "modeView" ? (
            <Form className="mt-5" onSubmit={handleSubmitGameMode}>
              {/* <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Control
                  style={{ padding: "0.6rem 0.6rem" }}
                  className="makefieldgightmore"
                  type="text"
                  name="gameType"
                  value={formDataMode?.gameType || ""}
                  onChange={handleInputChangeMode}
                  placeholder="Game Type"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Game Title.
                </Form.Control.Feedback>
              </Form.Group> */}

              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  className="makefieldgightmore"
                  type="text"
                  name="modeTitle"
                  placeholder="Game Mode"
                  value={formDataMode?.modeTitle || ""}
                  onChange={handleInputChangeMode}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Game Mode.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  className="makefieldgightmore"
                  type="text"
                  name="status"
                  placeholder="Status"
                  value={formDataMode?.status || ""}
                  onChange={handleInputChangeMode}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Status.
                </Form.Control.Feedback>
              </Form.Group>

              <div className="makebtnsinrow">
                <div className="submitbtn">
                  <button className="formsubmitbutton" type="submit">
                    Update
                  </button>
                </div>
              </div>
            </Form>
          ) : props.view == "leagueView" ? (
            <Form className="mt-5" onSubmit={handleSubmitLeague}>
              {/* <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Select
                  style={{ padding: "0.6rem 0.6rem" }}
                  className="makefieldgightmore"
                  name="gameId"
                  required
                >
                  <option value="">Game Type</option>
                  <option value="">Game 1</option>
                  <option value="">Game 2</option>
                  <option value="">Game 3</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please Choose a Game ID.
                </Form.Control.Feedback>
              </Form.Group> */}
              {/* <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Select
                  style={{ padding: "0.6rem 0.6rem" }}
                  className="makefieldgightmore"
                  name="gameModeId"
                  required
                >
                  <option value="">Game Mode </option>
                  <option value="">Game 1</option>
                  <option value="">Game 2</option>
                  <option value="">Game 3</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please Choose a Game Mode ID.
                </Form.Control.Feedback>
              </Form.Group> */}
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  className="makefieldgightmore"
                  type="text"
                  name="leagueTitle"
                  placeholder="League Title"
                  value={formDataLeague?.leagueTitle || ""}
                  onChange={handleInputChangeLeague}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide A League Title.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Select
                  style={{ padding: "0.6rem 0.6rem" }}
                  className="makefieldgightmore"
                  name="investableBudget"
                  value={formDataLeague?.investableBudget || ""}
                  onChange={handleInputChangeLeague}
                  required
                >
                <option
                    value="10000"
                    selected={formDataLeague?.investableBudget == "10000"}
                  >
                    10000$
                  </option>
                  <option
                    value="20000"
                    selected={formDataLeague?.investableBudget =="20000"}
                  >
                    20000$
                  </option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please provide A Investable Budget.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Select
                  style={{ padding: "0.6rem 0.6rem" }}
                  className="makefieldgightmore"
                  name="membershipType"
                  value={formDataLeague?.membershipType}
                  onChange={handleInputChangeLeague}
                  required
                >
                 
                  <option
                    value="Free"
                    selected={formDataLeague?.membershipType == "Free"}
                  >
                    Free
                  </option>
                  <option
                    value="Subscription"
                    selected={formDataLeague?.membershipType =="Subscription"}
                  >
                    Subscription
                  </option>
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  Please provide A Membership Type.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  className="makefieldgightmore"
                  type="text"
                  name="status"
                  placeholder="Status"
                  value={formDataLeague?.status || ""}
                  onChange={handleInputChangeLeague}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide A Status.
                </Form.Control.Feedback>
              </Form.Group>
              <div className="makebtnsinrow">
                <div className="submitbtn">
                  <button className="formsubmitbutton" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          ) : props.view == "clubView" ? (
            <Form className="mt-5" onSubmit={handleSubmitClub}>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  className="makefieldgightmore"
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={formDataClub?.title}
                  onChange={handleClubChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide A Title.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  className="makefieldgightmore"
                  type="text"
                  name="symbol"
                  placeholder="symbol"
                  value={formDataClub?.Symbol}
                  onChange={handleClubChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide Symbol.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  className="makefieldgightmore"
                  type="text"
                  name="status"
                  placeholder="Status"
                  value={formDataClub?.status}
                  onChange={handleClubChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide A Status.
                </Form.Control.Feedback>
              </Form.Group>
              <div className="makebtnsinrow">
                <div className="submitbtn">
                  <button className="formsubmitbutton" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          ) : null}
        </Modal.Body>
        <Modal.Footer>{/* Footer content */}</Modal.Footer>
      </Modal>
    </>
  );
};

export default Popup;
