import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { useSelector } from "react-redux";
import { getFilter } from "../../redux/filterSlice";
import { useGetPostsQuery } from "../../redux/commentApi";

export const Comments = () => {
  const filter = useSelector(getFilter);
  const { data: comments, isError, isLoading } = useGetPostsQuery();
  //

  const visiblComments = comments?.filter((el) =>
    el.content.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Grid>
      {comments &&
        visiblComments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
