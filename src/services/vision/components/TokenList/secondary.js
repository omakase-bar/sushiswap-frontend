import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { Box, Flex, Text } from "rebass";
import TokenLogo from "../TokenLogo";
import { CustomLink } from "../Link";
import Row from "../Row";
import { Divider } from "..";

import { formattedNum, formattedPercent } from "../../utils";
import { useMedia } from "react-use";
import { withRouter } from "react-router-dom";
import { OVERVIEW_TOKEN_BLACKLIST } from "../../constants";
import { TOKEN_WHITELIST } from "../../constants";
import FormattedName from "../FormattedName";
import { TYPE } from "../../Theme";
import { isAddress } from "../../utils/index.js";
import logoNotFound from "../../../../assets/img/logoNotFound.png";

dayjs.extend(utc);

const PageButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2em;
  margin-bottom: 2em;
`;

const Arrow = styled.div`
  color: ${({ theme }) => theme.primary1};
  opacity: ${(props) => (props.faded ? 0.3 : 1)};
  padding: 0 20px;
  user-select: none;
  :hover {
    cursor: pointer;
  }
`;

const List = styled(Box)`
  -webkit-overflow-scrolling: touch;
`;

const DashGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 100px 1fr 1fr;
  grid-template-areas: "name liq vol";
  padding: 0 1.125rem;

  > * {
    justify-content: flex-end;

    &:first-child {
      justify-content: flex-start;
      text-align: left;
      width: 245px;
    }
  }

  @media screen and (min-width: 680px) {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 180px 1fr 1fr 1fr;
    grid-template-areas: "name symbol liq vol ";

    > * {
      justify-content: flex-end;
      width: 100%;

      &:first-child {
        justify-content: flex-start;
      }
    }
  }

  @media screen and (min-width: 1080px) {
    display: grid;
    grid-gap: 0.5em;
    grid-template-columns: 1.5fr 0.6fr 1fr 1fr 1fr 1fr;
    grid-template-areas: "name symbol liq vol price change";
  }
`;

const ListWrapper = styled.div``;

const ClickableText = styled(Text)`
  text-align: end;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
  user-select: none;
  color: ${({ theme }) => theme.text1};

  @media screen and (max-width: 640px) {
    font-size: 0.85rem;
  }
`;

const DataText = styled(Flex)`
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.text1};

  & > * {
    font-size: 14px;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const SORT_FIELD = {
  LIQ: "totalLiquidityUSD",
  VOL: "oneDayVolumeUSD",
  SYMBOL: "symbol",
  NAME: "name",
  PRICE: "priceUSD",
  CHANGE: "priceChangeUSD",
};

// @TODO rework into virtualized list
function TopTokenList({ tokens, itemMax = 10 }) {
  // page state
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  // sorting
  const [sortDirection, setSortDirection] = useState(true);
  const [sortedColumn, setSortedColumn] = useState(SORT_FIELD.LIQ);

  const below1080 = useMedia("(max-width: 1080px)");
  const below680 = useMedia("(max-width: 680px)");
  const below600 = useMedia("(max-width: 600px)");

  useEffect(() => {
    setMaxPage(1); // edit this to do modular
    setPage(1);
  }, [tokens]);

  const formattedTokens = useMemo(() => {
    return (
      tokens &&
      Object.keys(tokens)
        .filter((key) => {
          //console.log("key:", key);
          //return TOKEN_WHITELIST.includes(key); // include only farm tokens
          return !OVERVIEW_TOKEN_BLACKLIST.includes(key); // include non farm tokens
        })
        .map((key) => tokens[key])
    );
  }, [tokens]);

  //console.log("FORMATTED_TOKENS:", formattedTokens);

  useEffect(() => {
    if (tokens && formattedTokens) {
      let extraPages = 1;
      if (formattedTokens.length % itemMax === 0) {
        extraPages = 0;
      }
      setMaxPage(Math.floor(formattedTokens.length / itemMax) + extraPages);
    }
  }, [tokens, formattedTokens, itemMax]);

  const filteredList = useMemo(() => {
    return (
      formattedTokens &&
      formattedTokens
        .sort((a, b) => {
          if (sortedColumn === SORT_FIELD.SYMBOL || sortedColumn === SORT_FIELD.NAME) {
            return a[sortedColumn] > b[sortedColumn]
              ? (sortDirection ? -1 : 1) * 1
              : (sortDirection ? -1 : 1) * -1;
          }
          return parseFloat(a[sortedColumn]) > parseFloat(b[sortedColumn])
            ? (sortDirection ? -1 : 1) * 1
            : (sortDirection ? -1 : 1) * -1;
        })
        .slice(itemMax * (page - 1), page * itemMax)
    );
  }, [formattedTokens, itemMax, page, sortDirection, sortedColumn]);

  const ListItem = ({ item, index }) => {
    return (
      <DashGrid style={{ height: "48px" }} focus={true}>
        {below680 ? (
          <Row>
            <TokenLogo address={item.id} />
            <CustomLink
              style={{ marginLeft: "16px", whiteSpace: "nowrap" }}
              to={"/token/" + item.id}
            >
              <FormattedName
                text={below680 ? item.symbol : item.name}
                maxCharacters={below600 ? 8 : 16}
                adjustSize={true}
                link={true}
              />
            </CustomLink>
          </Row>
        ) : (
          <Row>
            <td
              //className="py-1.5 text-sm whitespace-no-wrap border-b border-gray-200 bg-white truncate"
              className="py-1.5 text-sm whitespace-no-wrap bg-white truncate"
              style={
                {
                  //minWidth: "15rem",
                  // position: "-webkit-sticky",
                  // position: "sticky",
                  // width: "16rem",
                  // minWidth: "16rem",
                  // maxWidth: "16rem",
                  // left: "0px",
                  // boxShadow: "10px 0 5px -2px #f3f3f3",
                  // borderColor: "transparent",
                }
              }
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 text-3xl">
                  <img
                    class="max-w-none h-6 w-6 rounded-full text-white shadow-solid mt-2"
                    src={`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${isAddress(
                      item.id
                    )}/logo.png`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = logoNotFound;
                    }}
                    alt={item.name + " Logo"}
                  />
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    <Link
                      to={"/token/" + item.id}
                      className="flex items-center text-sm font-medium leading-5 text-gray-900 hover:underline"
                    >
                      {item.name}
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </Link>
                    {item.new ? (
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-teal-100 text-teal-800">
                        New
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            </td>
          </Row>
        )}
        {/* <DataText area="name" fontWeight="500">
          <Row>
            {!below680 && (
              <div style={{ marginRight: "1rem", width: "10px" }}>{index}</div>
            )}
            <TokenLogo address={item.id} />
            <CustomLink
              style={{ marginLeft: "16px", whiteSpace: "nowrap" }}
              to={"/token/" + item.id}
            >
              <FormattedName
                text={below680 ? item.symbol : item.name}
                maxCharacters={below600 ? 8 : 16}
                adjustSize={true}
                link={true}
              />
            </CustomLink>
          </Row>
        </DataText> */}
        {!below680 && (
          <DataText area="symbol" color="text" fontWeight="500">
            <FormattedName text={item.symbol} maxCharacters={5} />
          </DataText>
        )}
        <DataText area="liq">{formattedNum(item.totalLiquidityUSD, true)}</DataText>
        <DataText area="vol">{formattedNum(item.oneDayVolumeUSD, true)}</DataText>
        {!below1080 && (
          <DataText area="price" color="text" fontWeight="500">
            {formattedNum(item.priceUSD, true)}
          </DataText>
        )}
        {!below1080 && <DataText area="change">{formattedPercent(item.priceChangeUSD)}</DataText>}
      </DashGrid>
    );
  };

  return (
    <ListWrapper>
      <DashGrid
        center={true}
        style={{ height: "fit-content", padding: "0 1.125rem 1rem 1.125rem" }}
      >
        <Flex alignItems="center" justifyContent="flexStart">
          <ClickableText
            color="text"
            area="name"
            fontWeight="500"
            onClick={(e) => {
              setSortedColumn(SORT_FIELD.NAME);
              setSortDirection(sortedColumn !== SORT_FIELD.NAMe ? true : !sortDirection);
            }}
          >
            {below680 ? "Symbol" : "Name"}{" "}
            {sortedColumn === SORT_FIELD.NAME ? (!sortDirection ? "↑" : "↓") : ""}
          </ClickableText>
        </Flex>
        {!below680 && (
          <Flex alignItems="center">
            <ClickableText
              area="symbol"
              onClick={(e) => {
                setSortedColumn(SORT_FIELD.SYMBOL);
                setSortDirection(sortedColumn !== SORT_FIELD.SYMBOL ? true : !sortDirection);
              }}
            >
              Symbol {sortedColumn === SORT_FIELD.SYMBOL ? (!sortDirection ? "↑" : "↓") : ""}
            </ClickableText>
          </Flex>
        )}

        <Flex alignItems="center">
          <ClickableText
            area="liq"
            onClick={(e) => {
              setSortedColumn(SORT_FIELD.LIQ);
              setSortDirection(sortedColumn !== SORT_FIELD.LIQ ? true : !sortDirection);
            }}
          >
            Liquidity {sortedColumn === SORT_FIELD.LIQ ? (!sortDirection ? "↑" : "↓") : ""}
          </ClickableText>
        </Flex>
        <Flex alignItems="center">
          <ClickableText
            area="vol"
            onClick={(e) => {
              setSortedColumn(SORT_FIELD.VOL);
              setSortDirection(sortedColumn !== SORT_FIELD.VOL ? true : !sortDirection);
            }}
          >
            Volume (24hrs)
            {sortedColumn === SORT_FIELD.VOL ? (!sortDirection ? "↑" : "↓") : ""}
          </ClickableText>
        </Flex>
        {!below1080 && (
          <Flex alignItems="center">
            <ClickableText
              area="price"
              onClick={(e) => {
                setSortedColumn(SORT_FIELD.PRICE);
                setSortDirection(sortedColumn !== SORT_FIELD.PRICE ? true : !sortDirection);
              }}
            >
              Price {sortedColumn === SORT_FIELD.PRICE ? (!sortDirection ? "↑" : "↓") : ""}
            </ClickableText>
          </Flex>
        )}
        {!below1080 && (
          <Flex alignItems="center">
            <ClickableText
              area="change"
              onClick={(e) => {
                setSortedColumn(SORT_FIELD.CHANGE);
                setSortDirection(sortedColumn !== SORT_FIELD.CHANGE ? true : !sortDirection);
              }}
            >
              Price Change (24hrs)
              {sortedColumn === SORT_FIELD.CHANGE ? (!sortDirection ? "↑" : "↓") : ""}
            </ClickableText>
          </Flex>
        )}
      </DashGrid>
      <Divider />
      <List p={0}>
        {filteredList &&
          filteredList.map((item, index) => {
            return (
              <div key={index}>
                <ListItem key={index} index={(page - 1) * itemMax + index + 1} item={item} />
                <Divider />
              </div>
            );
          })}
      </List>
      {/* <PageButtons>
        <div onClick={() => setPage(page === 1 ? page : page - 1)}>
          <Arrow faded={page === 1 ? true : false}>←</Arrow>
        </div>
        <TYPE.body>{"Page " + page + " of " + maxPage}</TYPE.body>
        <div onClick={() => setPage(page === maxPage ? page : page + 1)}>
          <Arrow faded={page === maxPage ? true : false}>→</Arrow>
        </div>
      </PageButtons> */}
      <nav className="bg-white px-4 py-3 flex items-center justify-between border-t border-b border-cool-gray-100 sm:px-6">
        <div className="hidden sm:block">
          <p className="text-sm leading-5 text-cool-gray-700">
            {"Page " + page + " of " + maxPage}
          </p>
        </div>
        <div className="flex-1 flex justify-between sm:justify-end">
          <div className="relative inline-flex items-center px-4 py-2 border border-cool-gray-300 text-sm leading-5 font-medium rounded-md text-cool-gray-700 bg-white hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-cool-gray-100 active:text-cool-gray-700 transition ease-in-out duration-150">
            <div onClick={() => setPage(page === 1 ? page : page - 1)}>
              <Arrow faded={page === 1 ? true : false}>← Previous</Arrow>
            </div>
          </div>
          <div className="ml-3 relative inline-flex items-center px-4 py-2 border border-cool-gray-300 text-sm leading-5 font-medium rounded-md text-cool-gray-700 bg-white hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-cool-gray-100 active:text-cool-gray-700 transition ease-in-out duration-150">
            <div onClick={() => setPage(page === maxPage ? page : page + 1)}>
              <Arrow faded={page === maxPage ? true : false}>Next →</Arrow>
            </div>
          </div>
        </div>
      </nav>
    </ListWrapper>
  );
}

export default withRouter(TopTokenList);
