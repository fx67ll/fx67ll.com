// 防止动画导致下面的动画无法展现
$("#fx67ll-typed-box").resize(function() {
    let boxh = $("#fx67ll-typed-box").height();
    let screenh = $(document.body).height();
    if (boxh > screenh) {
        $("#fx67ll-typed-box").offset({
            top: -(boxh - screenh) - 100
        });
    }
});

// Type animation. This is a call back hell!
const fx67llTypeSpeed = 28;
const fx67llStartDelay = 188;
const fx67llNextTimeSpace = 888;

let fx67llStringList = [
    'If today were the last day of my life, would I want to do what I am about to do today?',
    'AI时代，任何人都有机会快速深入学会某一项专业技能，对于高度技能依赖化的码农来说，这既是危机也是机遇',
    '机遇在于，过去的经验能够让我赢在起跑线，使得我能够通过敏锐的专业直觉，拓展无限多的技能点',
    '危机在于，AI面前，人人平等，不会再有过多的信息差，经验与方案被AI快速提出并应用，效率无限倍的放大',
    'But remember that, Success is not final, Failure is not fatal. It is the courage to continue that counts.———— Winston Churchill',
];

// 创建类型化字符串的递归函数
const createTypedString = (index) => {
    // 当处理到最后两个字符串时，使用特殊处理（覆盖效果）
    if (index === fx67llStringList.length - 2) {
        // 创建倒数第二个字符串的容器
        $("#fx67ll-typed-" + (index - 1)).next().hide();
        $("#fx67ll-typed-" + (index - 1)).append("<br><br><span id='fx67ll-typed-" + index + "'></span>");
        
        let typed_next = new Typed('#fx67ll-typed-' + index, {
            strings: [fx67llStringList[index], fx67llStringList[index + 1]],
            startDelay: fx67llStartDelay,
            typeSpeed: fx67llTypeSpeed,
            backSpeed: 0,
            backDelay: 1000,
            onComplete: () => {
                console.log('Type animation is finished ~~~');
                setTimeout(typeNextEgg, 4498);
            },
        });
        return;
    }
    
    // 处理普通字符串
    if (index > 0) {
        $("#fx67ll-typed-" + (index - 1)).next().hide();
        $("#fx67ll-typed-" + (index - 1)).append("<br><br><span id='fx67ll-typed-" + index + "'></span>");
    }
    
    let typed_next = new Typed('#fx67ll-typed-' + index, {
        strings: [fx67llStringList[index]],
        startDelay: fx67llStartDelay,
        typeSpeed: fx67llTypeSpeed,
        onComplete: () => {
            if (index < fx67llStringList.length - 1) {
                setTimeout(() => {
                    createTypedString(index + 1);
                }, fx67llNextTimeSpace);
            }
        },
    });
};

// 初始化第一个Typed实例
let typed = new Typed('#fx67ll-typed', {
    stringsElement: '#fx67ll-typed-strings',
    typeSpeed: fx67llTypeSpeed,
    onComplete: () => {
        setTimeout(() => {
            $("#fx67ll-typed").next().hide();
            $("#fx67ll-typed").append("<br><br><span id='fx67ll-typed-0'></span>");
            
            // 开始处理第一个字符串
            let typed_first = new Typed('#fx67ll-typed-0', {
                strings: [fx67llStringList[0]],
                startDelay: fx67llStartDelay,
                typeSpeed: fx67llTypeSpeed,
                onComplete: () => {
                    // 如果有更多字符串，继续处理
                    if (fx67llStringList.length > 1) {
                        setTimeout(() => {
                            createTypedString(1);
                        }, fx67llNextTimeSpace);
                    } else {
                        // 如果只有一个字符串，直接执行typeNextEgg
                        console.log('Type animation is finished ~~~');
                        setTimeout(typeNextEgg, 4498);
                    }
                },
            });
        }, fx67llNextTimeSpace);
    },
});

// 保持原有的typeNextEgg方法
const typeNextEgg = () => {
    console.log('Find some eggs !!!');
    $("#fx67ll-typed-box").offset({
        top: -($("#fx67ll-typed-box").height() / 2 - (window.innerHeight / 2))
    });
    $("#fx67ll-typed-box").html(
        "Welcome <strong><em class='fx67ll-a'>https://fx67ll.com</em></strong> ~"
    ); // 添加隐藏彩蛋，for Love
    if (document.getElementsByClassName("fx67ll-a")) {
        $('.fx67ll-a').click(function() {
            // window.open('https://guonan.love');
            window.open('https://love.fx67ll.com');
        });
    }
};