import { gql } from "@apollo/client";

export const FETCH_SKILLS = gql`
  query fetchSkills {
    skills {
      id
      name
    }
  }
`;

export const FETCH_UNMATCHED_POST = gql`
  query fetchUnmatchedPost {
    unmatchedPosts {
      id
      description
      title
      driver {
        id
        name
        githubLogin
        matchingPoint
        bio
      }
      requiredSkills {
        id
        name
      }
    }
  }
`;

export const FETCH_MY_POST = gql`
  query fetchMyPost {
    myDrivingPosts {
      id
      description
      title
      requiredSkills {
        id
        name
      }
    }
  }
`;

export const FETCH_MATCHED_POST = gql`
  query fetchMatchedPost {
    myMatchedPosts {
      id
      description
      title
      navigator {
        id
        name
        githubLogin
        matchingPoint
        bio
      }
      driver {
        id
        name
        githubLogin
        matchingPoint
        bio
      }
      requiredSkills {
        id
        name
      }
    }
  }
`;

export const FETCH_SPECIFIC_POST = gql`
  query fetchSpecificPost($id: String!) {
    post(id: $id) {
      id
      description
      title
      navigator {
        id
        name
        githubLogin
        matchingPoint
        bio
      }
      driver {
        id
        name
        githubLogin
        matchingPoint
        bio
      }
      requiredSkills {
        id
        name
      }
    }
  }
`;

export const FETCH_MESSAGES = gql`
  query fetchMessages($postId: String!) {
    messagesByPostId(postId: $postId) {
      id
      content
      createdBy {
        id
        name
        githubLogin
        matchingPoint
        bio
      }
    }
  }
`;

export const FETCH_ME = gql`
  query fetchMe {
    me {
      id
      name
      githubLogin
      matchingPoint
      bio
    }
  }
`;
