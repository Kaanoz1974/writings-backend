import type { NegativeResponse, PositiveResponse } from "./types";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.BCRYPT_SALT_NUMBER) throw new Error("Something went wrong!");

export const HTTP_OK_CODE = 200;
export const HTTP_CREATED_CODE = 201;
export const HTTP_ACCEPTED_CODE = 202;
export const HTTP_NO_CONTENT_CODE = 204;
export const HTTP_RESET_CONTENT_CODE = 205;
export const HTTP_PARTIAL_CONTENT_CODE = 206;

export const HTTP_MOVED_PERMANENTLY_CODE = 301;
export const HTTP_FOUND_CODE = 302;
export const HTTP_NOT_MODIFIED_CODE = 304;

export const HTTP_BAD_REQUEST_CODE = 400;
export const HTTP_UNAUTHORIZED_CODE = 401;
export const HTTP_FORBIDDEN_CODE = 403;
export const HTTP_NOT_FOUND_CODE = 404;
export const HTTP_METHOD_NOT_ALLOWED_CODE = 405;
export const HTTP_CONFLICT_CODE = 409;
export const HTTP_GONE_CODE = 410;
export const HTTP_IM_A_TEAPOT_CODE = 418;
export const HTTP_TOO_MANY_REQUESTS_CODE = 429;

export const HTTP_INTERNAL_SERVER_ERROR_CODE = 500;
export const HTTP_NOT_IMPLEMENTED_CODE = 501;
export const HTTP_BAD_GATEWAY_CODE = 502;
export const HTTP_SERVICE_UNAVAILABLE_CODE = 503;
export const HTTP_GATEWAY_TIMEOUT_CODE = 504;

// Constants

export const MAX_PAGE_IN_QURAN = 604;

export const BCRYPT_SALT_NUMBER = +process.env.BCRYPT_SALT_NUMBER;

// Functions

export const langCodeRefineFunction = (
  langCode: string | undefined | null
): boolean => {
  if (!langCode) return true;
  return langCode in AvailableLangCodes;
};

// Possible Responses

export const NotFoundResponse: NegativeResponse = {
  err: "Not Found.",
  code: HTTP_NOT_FOUND_CODE,
};

export const InternalServerErrorResponse: NegativeResponse = {
  err: "Internal Server Error.",
  code: HTTP_INTERNAL_SERVER_ERROR_CODE,
};

export const SomethingWentWrongResponse: NegativeResponse = {
  err: "Something went wrong.",
  code: HTTP_UNAUTHORIZED_CODE,
};

export const AlreadyCreatedResponse: NegativeResponse = {
  err: "Already has been created!",
  code: HTTP_CONFLICT_CODE,
};

export const CreatedResponse: PositiveResponse = {
  msg: "Created!",
  code: HTTP_CREATED_CODE,
};

export const DoneResponse: PositiveResponse = {
  msg: "Done!",
  code: HTTP_OK_CODE,
};

export const FailedResponse: NegativeResponse = {
  err: "Failed!",
  code: HTTP_BAD_REQUEST_CODE,
};

export const AvailableLangCodes = {
  en: "English",
  tr: "Turkish",
  de: "German",
} as const;