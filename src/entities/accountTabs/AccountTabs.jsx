import React from "react";
import { getUser } from "../../helpers/userUtils";
import TabItem from "../../shared/ui/TabItem";
import TabItemDate from "../../shared/ui/TabItemDate";

const AccountTabs = () => {
  const user = getUser();
  return (
    <div className="personal-acc__account-info">
      <TabItem data={user.userName} tabName={"Name"} type={"text"} />
      <TabItem data={user.email} tabName={"Email"} type={"email"} />
      <TabItem data={"**********"} tabName={"Password"} type={"password"} />
      <TabItem data={user.address} tabName={"Address"} type={"text"} />
      <TabItemDate data={user.date} tabName={"Date of birth"} type={"date"} />
    </div>
  );
};

export default AccountTabs;
