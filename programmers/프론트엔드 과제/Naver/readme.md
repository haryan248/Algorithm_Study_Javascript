# 1차 문제

기본으로 제공되는 `src/Pagination.js` 파일을 수정하여, 아래의 요구사항을 만족하는 Pagination 컴포넌트를 구현합니다.

## 요구사항

### 컴포넌트 구현

-   샘플로 제공되는 `src/Pagination.js` 파일과 `index.html` 파일을 보고 Pagination 컴포넌트를 구현하고, new 키워드를 이용해 생성하여 사용합니다.
-   생성 시, 아래의 파라메터가 object 형태로 넘어가야합니다. 파라메터 값은 넘기지 않을 경우, 아래 설명을 참고하여 기본값을 설정하도록 합니다.

    -   currentPage: 현재의 페이지(기본값 1)
    -   totalItemCount: 페이지 갯수에 쓰일 전체 아이템의 갯수(기본값 0)
    -   pagePerItemCount: 페이지 당 표시할 아이템 갯수(기본값 20)

    ```jsx
    // 호출 예시
    const pagination = new Pagination({
        currentPage: 1,
        totalItemCount: 300,
        pagePerItemCount: 20,
    });

    // 아래의 경우 pagePerItemCount가 안 넘어갔기 때문에
    // 기본값인 20으로 동작해야 합니다.
    const pagination2 = new Pagination({
        currentPage: 3,
        totalItemCount: 501,
    });
    ```

-   생성된 Pagination 컴포넌트는 각각 독립적으로 동작해야 하며, 새로운 Pagination의 생성이나 함수 호출 등이 다른 Pagination에 영향을 주면 안 됩니다.

### 필수 함수(혹은 메소드) 구현

-   Pagination 컴포넌트는 두 개의 함수(혹은 메소드)를 구현하고, 호출 시 의도한대로 동작해야 합니다.

    -   **setState(nextStateParam)**

        -   nextStateParam은 object 형태이며, 컴포넌트의 currentPage, totalItemCount, pagePerItemCount 등의 값을 바꿉니다.
        -   위의 세 가지 값 중 넘기지 않은 값이 있다면 기존 값을 유지합니다.

        ```jsx
        // 호출 예시
        const pagination = new Pagination({
            currentPage: 1,
            totalItemCount: 100,
            pagePerItemCount: 10,
        });

        pagination.setState({
            currentPage: 2,
            totalItemCount: 200,
            pagePerItemCount: 10,
        });

        // 아래 호출의 경우 totalItemCount, pagePerItemCount를 넘기지 않았으므로
        // 기존의 값인 totalItemCount: 200 과 pagePerItemCount: 10을 유지합니다.
        pagination.setState({
            currentPage: 3,
        });
        ```

-   **render()**

    -   Pagination 내에서 계산된 여러가지 정보를 기준으로 HTML string을 생성하여 리턴합니다.
    -   render 함수는 별도의 파라메터를 받지 않아야 합니다.
    -   현재 Pagination 내부 상태 값들을 기준으로 계산해서 동작해야 합니다.
    -   currentPage가 1보다 크다면 `<span class="prev-page"></span>`을 생성하여 페이지를 나타내는 span 요소들의 맨 앞에 렌더링합니다.
    -   currentPage가 마지막 페이지가 아니라면 `<span class="next-page"></span>`을 생성하여 페이지를 나타내는 span 요소들의 맨 뒤에 렌더링 합니다.
    -   위의 `prev-page`, `next-page`를 제외하고 페이지 요소를 나타내는 span은 최대 10개로 고정합니다.
    -   현재 페이지의 span에는 반드시 `current-page` class를 넣어야 합니다.
    -   totalItemCount가 0인 경우, render 함수는 `<div></div>`를 리턴합니다.
    -   생성해야하는 HTML의 형태는 아래와 같습니다.

        -   예시 1

            ```jsx
            const pagination = new Pagination({
                currentPage: 1,
                totalItemCount: 200,
                pagePerItemCount: 10,
            });
            const html = pagination.render();
            ```

            이렇게 render 함수가 호출이 되면, 아래 형식을 참고하여 HTML string을 return 해야 합니다. (들여쓰기나 개행은 실제 생성되는 HTML에는 포함되지 않아도 무관합니다.)

            ```html
            <div>
                <span class="current-page">1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span class="next-page"></span>
            </div>
            ```

        -   예시 2

            ```jsx
            const pagination = new Pagination({
                currentPage: 3,
                totalItemCount: 201,
                pagePerItemCount: 40,
            });
            const html = pagination.render();
            ```

            위의 경우, html 변수에는 아래와 같은 HTML string이 들어가 있어야 합니다.

            ```html
            <div>
                <span class="prev-page"></span>
                <span>1</span>
                <span>2</span>
                <span class="current-page">3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span class="next-page"></span>
            </div>
            ```

        -   예시 3

            ```jsx
            const pagination = new Pagination({
                currentPage: 17,
                totalItemCount: 4753,
            });

            const html1 = pagination.render();
            ```

            html1에는 아래의 HTML string이 들어있어야 합니다.

            ```jsx
            <div>
                <span class="prev-page"></span>
                <span>11</span>
                <span>12</span>
                <span>13</span>
                <span>14</span>
                <span>15</span>
                <span>16</span>
                <span class="current-page">17</span>
                <span>18</span>
                <span>19</span>
                <span>20</span>
                <span class="next-page"></span>
            </div>
            ```

            이후, 아래 코드처럼 생성된 pagination의 setState 함수를 호출한 뒤 다시 render를 호출한 경우,

            ```jsx
            pagination.setState({
                currentPage: 18,
            });

            const html2 = pagination.render();
            ```

            다음과 같은 HTML string이 html2 변수에 들어있어야 합니다.

            ```jsx
            <div>
                <span class="prev-page"></span>
                <span>11</span>
                <span>12</span>
                <span>13</span>
                <span>14</span>
                <span>15</span>
                <span>16</span>
                <span>17</span>
                <span class="current-page">18</span>
                <span>19</span>
                <span>20</span>
                <span class="next-page"></span>
            </div>
            ```

        -   예시 4

            ```jsx
            // totalItemCount를 넘기지 않아서 기본값인 0으로 세팅된 케이스
            const pagination = new Pagination();

            const html1 = pagination.render();
            ```

            html1에는 아래의 HTML string이 들어있어야 합니다.

            ```jsx
            <div></div>
            ```

### 그 외 구현사항

-   기본적으로 ES6+ 문법을 사용하도록 합니다.
-   (중요) 기본 제공되는 `src/Pagination.js` 파일 내에 구현해주시고, 실제로 구현된 Pagination 컴포넌트를 `export default` 하는 부분은 꼭 필요합니다. 예제 코드를 참고해주세요.
-   function style, class style 어느 쪽이든 무방합니다.
-   Pagination 컴포넌트 생성 시나 setState 시에 숫자에 해당하는 모든 파라메터 값이 숫자가 아닌 값이 들어온 경우 기본값으로 지정합니다.
-   Pagination 컴포넌트 생성 시 파라메터가 누락된 경우 기본값으로 지정합니다.
-   만약 currentPage가 생성할 수 있는 page의 범위를 넘은 경우, 가장 마지막 페이지 값으로 변경하여 처리하도록 합니다.
-   Pagination 컴포넌트 생성 시나 setState 시에 파라메터의 값이 음수로 들어온 경우, 기본값으로 설정합니다.
    -   totalItemCount를 제외한 파라메터의 경우 0이 들어오는 경우에도 기본값으로 설정합니다.

### 구현시 참고 사항

-   작업하면서 렌더링 테스트 등이 필요한 경우 index.html 파일을 참고하여 해당 파일의 스크립트 실행 부분에서 스크립트를 실행하고 `div.container` 안에서 렌더링해가면서 테스트하시면 됩니다.
