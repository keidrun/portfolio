// @flow
import React from 'react';

type Props = {
  title: string,
  link: string,
};

const SocialBtn = ({ title, link }: Props) => (
  <a href={link} className="my-socsial-btn btn btn-sm btn-outline-light">
    {title}
  </a>
);

export default SocialBtn;
