import { STATUS } from '*/constants/status';

export const successData = (res, data) => {
  res.status(200).json({
    success: true,
    data: data,
  });
};

export const successNoData = (res) => {
  res.status(STATUS.OK).json({
    success: true,
  });
};

export const errorServer = (res, errMessage) => {
  res.status(STATUS.INTERNAL_SERVER_ERROR).json({
    succcess: false,
    data: errMessage,
  });
};

export const errorClient = (req, errMessage) => {
  res.status(STATUS.BAD_REQUEST).json({
    success: false,
    data: errMessage,
  });
};
