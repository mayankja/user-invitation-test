import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Wrapper,
  Flexbox,
  Section,
  Title,
  SearchInput,
  Listing,
  Invite,
} from "../conponents";
import {
  createInvitation,
  getUser,
  getInvitation,
  deleteInvitation,
} from "../api";

const Users = () => {
  const [selectedInvite, setSelectedInvite] = useState({});
  const dispatch = useDispatch();
  const { user, invites, toggleReload } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getInvitation());
  }, [dispatch, toggleReload]);

  return (
    <Flexbox>
      <Wrapper>
        <Section>
          <Title>
            <div>{invites.length} attendees in Waiting Room</div>
            <Invite>
              <SearchInput
                value={selectedInvite.name}
                onChange={({ value }) => {
                  setSelectedInvite(value);
                }}
                datalist={user}
                list={"user"}
                placeholder={"Start typing..."}
              />
              <Button
                onClick={() =>
                  dispatch(createInvitation({ userId: selectedInvite.id }))
                }
              >
                INVITE USER
              </Button>
            </Invite>
          </Title>
          <Listing
            list={invites}
            onDelete={(id) => dispatch(deleteInvitation({ id }))}
          />
        </Section>
      </Wrapper>
    </Flexbox>
  );
};

export default Users;
