// Generated from LessParser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LessParserListener from './LessParserListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0091\u0173\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0003\u0002\u0007\u0002N\n\u0002\f",
    "\u0002\u000e\u0002Q\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003Y\n\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004_\n\u0004\u0003\u0005",
    "\u0006\u0005b\n\u0005\r\u0005\u000e\u0005c\u0003\u0005\u0005\u0005g",
    "\n\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005",
    "\bv\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0005\b\u0081\n\b\u0003\t\u0003\t\u0003\t\u0005\t\u0086\n",
    "\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0007\n\u008d\n\n\f\n\u000e",
    "\n\u0090\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u009b",
    "\n\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00a2\n\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0007\u000e\u00ad\n\u000e\f\u000e\u000e\u000e\u00b0",
    "\u000b\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00b4\n\u000e\u0003",
    "\u000e\u0003\u000e\u0005\u000e\u00b8\n\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0005\u0010\u00c2\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0007",
    "\u0011\u00c7\n\u0011\f\u0011\u000e\u0011\u00ca\u000b\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0007\u0013\u00d5\n\u0013\f\u0013\u000e\u0013",
    "\u00d8\u000b\u0013\u0003\u0013\u0005\u0013\u00db\n\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0007\u0014\u00e4\n\u0014\f\u0014\u000e\u0014\u00e7\u000b\u0014\u0005",
    "\u0014\u00e9\n\u0014\u0003\u0014\u0005\u0014\u00ec\n\u0014\u0003\u0014",
    "\u0003\u0014\u0005\u0014\u00f0\n\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0005\u0016\u00f9",
    "\n\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u00fe\n\u0017",
    "\u0003\u0017\u0003\u0017\u0005\u0017\u0102\n\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0007\u0018\u0109\n\u0018",
    "\f\u0018\u000e\u0018\u010c\u000b\u0018\u0003\u0019\u0006\u0019\u010f",
    "\n\u0019\r\u0019\u000e\u0019\u0110\u0003\u0019\u0007\u0019\u0114\n\u0019",
    "\f\u0019\u000e\u0019\u0117\u000b\u0019\u0003\u0019\u0005\u0019\u011a",
    "\n\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0005\u001a\u0121\n\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u0129\n\u001b\u0003\u001b",
    "\u0003\u001b\u0005\u001b\u012d\n\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0005\u001d\u013e\n\u001d\u0003\u001e\u0003\u001e\u0003\u001f",
    "\u0003\u001f\u0003 \u0003 \u0007 \u0146\n \f \u000e \u0149\u000b \u0003",
    " \u0003 \u0003 \u0003 \u0007 \u014f\n \f \u000e \u0152\u000b \u0005",
    " \u0154\n \u0003!\u0003!\u0003!\u0003!\u0003!\u0005!\u015b\n!\u0003",
    "\"\u0003\"\u0003#\u0003#\u0003#\u0003#\u0003$\u0003$\u0003$\u0007$\u0166",
    "\n$\f$\u000e$\u0169\u000b$\u0003%\u0003%\u0003%\u0003%\u0003&\u0003",
    "&\u0005&\u0171\n&\u0003&\u0002\u0002\'\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@B",
    "DFHJ\u0002\u000b\u0003\u0002\u001a\u001e\u0004\u0002\u0013\u001366\u0006",
    "\u0002\u000e\u000e\u0010\u0010 !##\u0003\u0002.3\u0003\u000278\u0004",
    "\u0002\u0011\u0011\u0019\u0019\u0004\u0002\u000e\u000f\u001a\u001a\u0003",
    "\u0002#%\u0004\u000277\u0091\u0091\u0002\u0184\u0002O\u0003\u0002\u0002",
    "\u0002\u0004X\u0003\u0002\u0002\u0002\u0006^\u0003\u0002\u0002\u0002",
    "\ba\u0003\u0002\u0002\u0002\nh\u0003\u0002\u0002\u0002\fj\u0003\u0002",
    "\u0002\u0002\u000e\u0080\u0003\u0002\u0002\u0002\u0010\u0082\u0003\u0002",
    "\u0002\u0002\u0012\u0089\u0003\u0002\u0002\u0002\u0014\u009a\u0003\u0002",
    "\u0002\u0002\u0016\u00a1\u0003\u0002\u0002\u0002\u0018\u00a3\u0003\u0002",
    "\u0002\u0002\u001a\u00a7\u0003\u0002\u0002\u0002\u001c\u00bb\u0003\u0002",
    "\u0002\u0002\u001e\u00c1\u0003\u0002\u0002\u0002 \u00c3\u0003\u0002",
    "\u0002\u0002\"\u00cb\u0003\u0002\u0002\u0002$\u00ce\u0003\u0002\u0002",
    "\u0002&\u00de\u0003\u0002\u0002\u0002(\u00f3\u0003\u0002\u0002\u0002",
    "*\u00f8\u0003\u0002\u0002\u0002,\u00fa\u0003\u0002\u0002\u0002.\u0105",
    "\u0003\u0002\u0002\u00020\u010e\u0003\u0002\u0002\u00022\u011b\u0003",
    "\u0002\u0002\u00024\u0124\u0003\u0002\u0002\u00026\u0130\u0003\u0002",
    "\u0002\u00028\u013d\u0003\u0002\u0002\u0002:\u013f\u0003\u0002\u0002",
    "\u0002<\u0141\u0003\u0002\u0002\u0002>\u0153\u0003\u0002\u0002\u0002",
    "@\u015a\u0003\u0002\u0002\u0002B\u015c\u0003\u0002\u0002\u0002D\u015e",
    "\u0003\u0002\u0002\u0002F\u0162\u0003\u0002\u0002\u0002H\u016a\u0003",
    "\u0002\u0002\u0002J\u016e\u0003\u0002\u0002\u0002LN\u0005\u0004\u0003",
    "\u0002ML\u0003\u0002\u0002\u0002NQ\u0003\u0002\u0002\u0002OM\u0003\u0002",
    "\u0002\u0002OP\u0003\u0002\u0002\u0002P\u0003\u0003\u0002\u0002\u0002",
    "QO\u0003\u0002\u0002\u0002RY\u0005\u001a\u000e\u0002SY\u0005\"\u0012",
    "\u0002TU\u0005\u0018\r\u0002UV\u0007\u0012\u0002\u0002VY\u0003\u0002",
    "\u0002\u0002WY\u0005&\u0014\u0002XR\u0003\u0002\u0002\u0002XS\u0003",
    "\u0002\u0002\u0002XT\u0003\u0002\u0002\u0002XW\u0003\u0002\u0002\u0002",
    "Y\u0005\u0003\u0002\u0002\u0002Z[\u0007\u0016\u0002\u0002[_\u0005\u0006",
    "\u0004\u0002\\]\u0007\u0016\u0002\u0002]_\u00077\u0002\u0002^Z\u0003",
    "\u0002\u0002\u0002^\\\u0003\u0002\u0002\u0002_\u0007\u0003\u0002\u0002",
    "\u0002`b\u0005\u000e\b\u0002a`\u0003\u0002\u0002\u0002bc\u0003\u0002",
    "\u0002\u0002ca\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002df\u0003",
    "\u0002\u0002\u0002eg\u0005\f\u0007\u0002fe\u0003\u0002\u0002\u0002f",
    "g\u0003\u0002\u0002\u0002g\t\u0003\u0002\u0002\u0002hi\t\u0002\u0002",
    "\u0002i\u000b\u0003\u0002\u0002\u0002jk\u0005\n\u0006\u0002kl\u0005",
    "\b\u0005\u0002l\r\u0003\u0002\u0002\u0002m\u0081\u0005J&\u0002no\u0005",
    "> \u0002op\u0007+\u0002\u0002p\u0081\u0003\u0002\u0002\u0002q\u0081",
    "\u0005> \u0002rs\u0005> \u0002su\u0007\b\u0002\u0002tv\u0005F$\u0002",
    "ut\u0003\u0002\u0002\u0002uv\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002",
    "\u0002wx\u0007\t\u0002\u0002x\u0081\u0003\u0002\u0002\u0002y\u0081\u0007",
    ":\u0002\u0002z\u0081\u00078\u0002\u0002{\u0081\u0005H%\u0002|}\u0005",
    "\u0006\u0004\u0002}~\u0007+\u0002\u0002~\u0081\u0003\u0002\u0002\u0002",
    "\u007f\u0081\u0005\u0006\u0004\u0002\u0080m\u0003\u0002\u0002\u0002",
    "\u0080n\u0003\u0002\u0002\u0002\u0080q\u0003\u0002\u0002\u0002\u0080",
    "r\u0003\u0002\u0002\u0002\u0080y\u0003\u0002\u0002\u0002\u0080z\u0003",
    "\u0002\u0002\u0002\u0080{\u0003\u0002\u0002\u0002\u0080|\u0003\u0002",
    "\u0002\u0002\u0080\u007f\u0003\u0002\u0002\u0002\u0081\u000f\u0003\u0002",
    "\u0002\u0002\u0082\u0083\u0007>\u0002\u0002\u0083\u0085\u0007\b\u0002",
    "\u0002\u0084\u0086\u0005F$\u0002\u0085\u0084\u0003\u0002\u0002\u0002",
    "\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002",
    "\u0087\u0088\u0007\t\u0002\u0002\u0088\u0011\u0003\u0002\u0002\u0002",
    "\u0089\u008e\u0005\u0014\u000b\u0002\u008a\u008b\t\u0003\u0002\u0002",
    "\u008b\u008d\u0005\u0014\u000b\u0002\u008c\u008a\u0003\u0002\u0002\u0002",
    "\u008d\u0090\u0003\u0002\u0002\u0002\u008e\u008c\u0003\u0002\u0002\u0002",
    "\u008e\u008f\u0003\u0002\u0002\u0002\u008f\u0013\u0003\u0002\u0002\u0002",
    "\u0090\u008e\u0003\u0002\u0002\u0002\u0091\u0092\u0007\b\u0002\u0002",
    "\u0092\u0093\u0005\u0016\f\u0002\u0093\u0094\u0007\t\u0002\u0002\u0094",
    "\u009b\u0003\u0002\u0002\u0002\u0095\u0096\u00075\u0002\u0002\u0096",
    "\u0097\u0007\b\u0002\u0002\u0097\u0098\u0005\u0016\f\u0002\u0098\u0099",
    "\u0007\t\u0002\u0002\u0099\u009b\u0003\u0002\u0002\u0002\u009a\u0091",
    "\u0003\u0002\u0002\u0002\u009a\u0095\u0003\u0002\u0002\u0002\u009b\u0015",
    "\u0003\u0002\u0002\u0002\u009c\u009d\u0005\b\u0005\u0002\u009d\u009e",
    "\t\u0004\u0002\u0002\u009e\u009f\u0005\b\u0005\u0002\u009f\u00a2\u0003",
    "\u0002\u0002\u0002\u00a0\u00a2\u0005\b\u0005\u0002\u00a1\u009c\u0003",
    "\u0002\u0002\u0002\u00a1\u00a0\u0003\u0002\u0002\u0002\u00a2\u0017\u0003",
    "\u0002\u0002\u0002\u00a3\u00a4\u0005\u0006\u0004\u0002\u00a4\u00a5\u0007",
    "\u0011\u0002\u0002\u00a5\u00a6\u0005F$\u0002\u00a6\u0019\u0003\u0002",
    "\u0002\u0002\u00a7\u00b3\u0007(\u0002\u0002\u00a8\u00a9\u0007\b\u0002",
    "\u0002\u00a9\u00ae\u0005\u001c\u000f\u0002\u00aa\u00ab\u0007\u0013\u0002",
    "\u0002\u00ab\u00ad\u0005\u001c\u000f\u0002\u00ac\u00aa\u0003\u0002\u0002",
    "\u0002\u00ad\u00b0\u0003\u0002\u0002\u0002\u00ae\u00ac\u0003\u0002\u0002",
    "\u0002\u00ae\u00af\u0003\u0002\u0002\u0002\u00af\u00b1\u0003\u0002\u0002",
    "\u0002\u00b0\u00ae\u0003\u0002\u0002\u0002\u00b1\u00b2\u0007\t\u0002",
    "\u0002\u00b2\u00b4\u0003\u0002\u0002\u0002\u00b3\u00a8\u0003\u0002\u0002",
    "\u0002\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003\u0002\u0002",
    "\u0002\u00b5\u00b7\u0005\u001e\u0010\u0002\u00b6\u00b8\u0005 \u0011",
    "\u0002\u00b7\u00b6\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002",
    "\u0002\u00b8\u00b9\u0003\u0002\u0002\u0002\u00b9\u00ba\u0007\u0012\u0002",
    "\u0002\u00ba\u001b\u0003\u0002\u0002\u0002\u00bb\u00bc\t\u0005\u0002",
    "\u0002\u00bc\u001d\u0003\u0002\u0002\u0002\u00bd\u00c2\u00078\u0002",
    "\u0002\u00be\u00bf\u0007\'\u0002\u0002\u00bf\u00c0\u0007\u008e\u0002",
    "\u0002\u00c0\u00c2\u0007\u008d\u0002\u0002\u00c1\u00bd\u0003\u0002\u0002",
    "\u0002\u00c1\u00be\u0003\u0002\u0002\u0002\u00c2\u001f\u0003\u0002\u0002",
    "\u0002\u00c3\u00c8\u00077\u0002\u0002\u00c4\u00c5\u0007\u0013\u0002",
    "\u0002\u00c5\u00c7\u00077\u0002\u0002\u00c6\u00c4\u0003\u0002\u0002",
    "\u0002\u00c7\u00ca\u0003\u0002\u0002\u0002\u00c8\u00c6\u0003\u0002\u0002",
    "\u0002\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9!\u0003\u0002\u0002",
    "\u0002\u00ca\u00c8\u0003\u0002\u0002\u0002\u00cb\u00cc\u0005.\u0018",
    "\u0002\u00cc\u00cd\u0005$\u0013\u0002\u00cd#\u0003\u0002\u0002\u0002",
    "\u00ce\u00d6\u0007\n\u0002\u0002\u00cf\u00d0\u0005D#\u0002\u00d0\u00d1",
    "\u0007\u0012\u0002\u0002\u00d1\u00d5\u0003\u0002\u0002\u0002\u00d2\u00d5",
    "\u0005\u0004\u0003\u0002\u00d3\u00d5\u0005,\u0017\u0002\u00d4\u00cf",
    "\u0003\u0002\u0002\u0002\u00d4\u00d2\u0003\u0002\u0002\u0002\u00d4\u00d3",
    "\u0003\u0002\u0002\u0002\u00d5\u00d8\u0003\u0002\u0002\u0002\u00d6\u00d4",
    "\u0003\u0002\u0002\u0002\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7\u00da",
    "\u0003\u0002\u0002\u0002\u00d8\u00d6\u0003\u0002\u0002\u0002\u00d9\u00db",
    "\u0005D#\u0002\u00da\u00d9\u0003\u0002\u0002\u0002\u00da\u00db\u0003",
    "\u0002\u0002\u0002\u00db\u00dc\u0003\u0002\u0002\u0002\u00dc\u00dd\u0007",
    "\u000b\u0002\u0002\u00dd%\u0003\u0002\u0002\u0002\u00de\u00df\u0005",
    ".\u0018\u0002\u00df\u00e8\u0007\b\u0002\u0002\u00e0\u00e5\u0005*\u0016",
    "\u0002\u00e1\u00e2\u0007\u0012\u0002\u0002\u00e2\u00e4\u0005*\u0016",
    "\u0002\u00e3\u00e1\u0003\u0002\u0002\u0002\u00e4\u00e7\u0003\u0002\u0002",
    "\u0002\u00e5\u00e3\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002",
    "\u0002\u00e6\u00e9\u0003\u0002\u0002\u0002\u00e7\u00e5\u0003\u0002\u0002",
    "\u0002\u00e8\u00e0\u0003\u0002\u0002\u0002\u00e8\u00e9\u0003\u0002\u0002",
    "\u0002\u00e9\u00eb\u0003\u0002\u0002\u0002\u00ea\u00ec\u0007\u0006\u0002",
    "\u0002\u00eb\u00ea\u0003\u0002\u0002\u0002\u00eb\u00ec\u0003\u0002\u0002",
    "\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed\u00ef\u0007\t\u0002",
    "\u0002\u00ee\u00f0\u0005(\u0015\u0002\u00ef\u00ee\u0003\u0002\u0002",
    "\u0002\u00ef\u00f0\u0003\u0002\u0002\u0002\u00f0\u00f1\u0003\u0002\u0002",
    "\u0002\u00f1\u00f2\u0005$\u0013\u0002\u00f2\'\u0003\u0002\u0002\u0002",
    "\u00f3\u00f4\u00074\u0002\u0002\u00f4\u00f5\u0005\u0012\n\u0002\u00f5",
    ")\u0003\u0002\u0002\u0002\u00f6\u00f9\u0005\u0006\u0004\u0002\u00f7",
    "\u00f9\u0005\u0018\r\u0002\u00f8\u00f6\u0003\u0002\u0002\u0002\u00f8",
    "\u00f7\u0003\u0002\u0002\u0002\u00f9+\u0003\u0002\u0002\u0002\u00fa",
    "\u00fb\u00050\u0019\u0002\u00fb\u00fd\u0007\b\u0002\u0002\u00fc\u00fe",
    "\u0005F$\u0002\u00fd\u00fc\u0003\u0002\u0002\u0002\u00fd\u00fe\u0003",
    "\u0002\u0002\u0002\u00fe\u00ff\u0003\u0002\u0002\u0002\u00ff\u0101\u0007",
    "\t\u0002\u0002\u0100\u0102\u0007+\u0002\u0002\u0101\u0100\u0003\u0002",
    "\u0002\u0002\u0101\u0102\u0003\u0002\u0002\u0002\u0102\u0103\u0003\u0002",
    "\u0002\u0002\u0103\u0104\u0007\u0012\u0002\u0002\u0104-\u0003\u0002",
    "\u0002\u0002\u0105\u010a\u00050\u0019\u0002\u0106\u0107\u0007\u0013",
    "\u0002\u0002\u0107\u0109\u00050\u0019\u0002\u0108\u0106\u0003\u0002",
    "\u0002\u0002\u0109\u010c\u0003\u0002\u0002\u0002\u010a\u0108\u0003\u0002",
    "\u0002\u0002\u010a\u010b\u0003\u0002\u0002\u0002\u010b/\u0003\u0002",
    "\u0002\u0002\u010c\u010a\u0003\u0002\u0002\u0002\u010d\u010f\u00058",
    "\u001d\u0002\u010e\u010d\u0003\u0002\u0002\u0002\u010f\u0110\u0003\u0002",
    "\u0002\u0002\u0110\u010e\u0003\u0002\u0002\u0002\u0110\u0111\u0003\u0002",
    "\u0002\u0002\u0111\u0115\u0003\u0002\u0002\u0002\u0112\u0114\u00052",
    "\u001a\u0002\u0113\u0112\u0003\u0002\u0002\u0002\u0114\u0117\u0003\u0002",
    "\u0002\u0002\u0115\u0113\u0003\u0002\u0002\u0002\u0115\u0116\u0003\u0002",
    "\u0002\u0002\u0116\u0119\u0003\u0002\u0002\u0002\u0117\u0115\u0003\u0002",
    "\u0002\u0002\u0118\u011a\u00056\u001c\u0002\u0119\u0118\u0003\u0002",
    "\u0002\u0002\u0119\u011a\u0003\u0002\u0002\u0002\u011a1\u0003\u0002",
    "\u0002\u0002\u011b\u011c\u0007\f\u0002\u0002\u011c\u0120\u00077\u0002",
    "\u0002\u011d\u011e\u0005<\u001f\u0002\u011e\u011f\t\u0006\u0002\u0002",
    "\u011f\u0121\u0003\u0002\u0002\u0002\u0120\u011d\u0003\u0002\u0002\u0002",
    "\u0120\u0121\u0003\u0002\u0002\u0002\u0121\u0122\u0003\u0002\u0002\u0002",
    "\u0122\u0123\u0007\r\u0002\u0002\u01233\u0003\u0002\u0002\u0002\u0124",
    "\u0125\u0007\u0011\u0002\u0002\u0125\u0126\u00075\u0002\u0002\u0126",
    "\u0128\u0007\b\u0002\u0002\u0127\u0129\u0007\f\u0002\u0002\u0128\u0127",
    "\u0003\u0002\u0002\u0002\u0128\u0129\u0003\u0002\u0002\u0002\u0129\u012a",
    "\u0003\u0002\u0002\u0002\u012a\u012c\u0005.\u0018\u0002\u012b\u012d",
    "\u0007\r\u0002\u0002\u012c\u012b\u0003\u0002\u0002\u0002\u012c\u012d",
    "\u0003\u0002\u0002\u0002\u012d\u012e\u0003\u0002\u0002\u0002\u012e\u012f",
    "\u0007\t\u0002\u0002\u012f5\u0003\u0002\u0002\u0002\u0130\u0131\t\u0007",
    "\u0002\u0002\u0131\u0132\u00077\u0002\u0002\u01327\u0003\u0002\u0002",
    "\u0002\u0133\u0134\u0005:\u001e\u0002\u0134\u0135\u0005> \u0002\u0135",
    "\u013e\u0003\u0002\u0002\u0002\u0136\u013e\u0005> \u0002\u0137\u0138",
    "\u0007\u0018\u0002\u0002\u0138\u013e\u0005> \u0002\u0139\u013e\u0005",
    "6\u001c\u0002\u013a\u013e\u00054\u001b\u0002\u013b\u013e\u0007\u0017",
    "\u0002\u0002\u013c\u013e\u0007\u001b\u0002\u0002\u013d\u0133\u0003\u0002",
    "\u0002\u0002\u013d\u0136\u0003\u0002\u0002\u0002\u013d\u0137\u0003\u0002",
    "\u0002\u0002\u013d\u0139\u0003\u0002\u0002\u0002\u013d\u013a\u0003\u0002",
    "\u0002\u0002\u013d\u013b\u0003\u0002\u0002\u0002\u013d\u013c\u0003\u0002",
    "\u0002\u0002\u013e9\u0003\u0002\u0002\u0002\u013f\u0140\t\b\u0002\u0002",
    "\u0140;\u0003\u0002\u0002\u0002\u0141\u0142\t\t\u0002\u0002\u0142=\u0003",
    "\u0002\u0002\u0002\u0143\u0147\u00077\u0002\u0002\u0144\u0146\u0005",
    "@!\u0002\u0145\u0144\u0003\u0002\u0002\u0002\u0146\u0149\u0003\u0002",
    "\u0002\u0002\u0147\u0145\u0003\u0002\u0002\u0002\u0147\u0148\u0003\u0002",
    "\u0002\u0002\u0148\u0154\u0003\u0002\u0002\u0002\u0149\u0147\u0003\u0002",
    "\u0002\u0002\u014a\u014b\u0007\u0007\u0002\u0002\u014b\u014c\u0005B",
    "\"\u0002\u014c\u0150\u0007\u000b\u0002\u0002\u014d\u014f\u0005@!\u0002",
    "\u014e\u014d\u0003\u0002\u0002\u0002\u014f\u0152\u0003\u0002\u0002\u0002",
    "\u0150\u014e\u0003\u0002\u0002\u0002\u0150\u0151\u0003\u0002\u0002\u0002",
    "\u0151\u0154\u0003\u0002\u0002\u0002\u0152\u0150\u0003\u0002\u0002\u0002",
    "\u0153\u0143\u0003\u0002\u0002\u0002\u0153\u014a\u0003\u0002\u0002\u0002",
    "\u0154?\u0003\u0002\u0002\u0002\u0155\u0156\u0007\u0090\u0002\u0002",
    "\u0156\u0157\u0005B\"\u0002\u0157\u0158\u0007\u000b\u0002\u0002\u0158",
    "\u015b\u0003\u0002\u0002\u0002\u0159\u015b\u0007\u0091\u0002\u0002\u015a",
    "\u0155\u0003\u0002\u0002\u0002\u015a\u0159\u0003\u0002\u0002\u0002\u015b",
    "A\u0003\u0002\u0002\u0002\u015c\u015d\t\n\u0002\u0002\u015dC\u0003\u0002",
    "\u0002\u0002\u015e\u015f\u0005> \u0002\u015f\u0160\u0007\u0011\u0002",
    "\u0002\u0160\u0161\u0005F$\u0002\u0161E\u0003\u0002\u0002\u0002\u0162",
    "\u0167\u0005\b\u0005\u0002\u0163\u0164\u0007\u0013\u0002\u0002\u0164",
    "\u0166\u0005\b\u0005\u0002\u0165\u0163\u0003\u0002\u0002\u0002\u0166",
    "\u0169\u0003\u0002\u0002\u0002\u0167\u0165\u0003\u0002\u0002\u0002\u0167",
    "\u0168\u0003\u0002\u0002\u0002\u0168G\u0003\u0002\u0002\u0002\u0169",
    "\u0167\u0003\u0002\u0002\u0002\u016a\u016b\u0007\'\u0002\u0002\u016b",
    "\u016c\u0007\u008e\u0002\u0002\u016c\u016d\u0007\u008d\u0002\u0002\u016d",
    "I\u0003\u0002\u0002\u0002\u016e\u0170\u00079\u0002\u0002\u016f\u0171",
    "\u0007\u0005\u0002\u0002\u0170\u016f\u0003\u0002\u0002\u0002\u0170\u0171",
    "\u0003\u0002\u0002\u0002\u0171K\u0003\u0002\u0002\u0002*OX^cfu\u0080",
    "\u0085\u008e\u009a\u00a1\u00ae\u00b3\u00b7\u00c1\u00c8\u00d4\u00d6\u00da",
    "\u00e5\u00e8\u00eb\u00ef\u00f8\u00fd\u0101\u010a\u0110\u0115\u0119\u0120",
    "\u0128\u012c\u013d\u0147\u0150\u0153\u015a\u0167\u0170"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class LessParser extends antlr4.Parser {

    static grammarFileName = "LessParser.g4";
    static literalNames = [ null, "'null'", "'in'", null, "'...'", null, 
                            "'('", "')'", "'{'", "'}'", "'['", "']'", "'>'", 
                            "'~'", "'<'", "':'", "';'", "','", "'.'", "'$'", 
                            "'@'", "'&'", "'#'", "'::'", "'+'", "'*'", "'/'", 
                            "'-'", null, "'=='", "'>='", "'<='", "'!='", 
                            "'='", "'|='", "'~='", "'url'", null, "'@import'", 
                            "'@media'", "':extend'", "'!important'", "'@arguments'", 
                            "'@rest'", "'reference'", "'inline'", "'less'", 
                            "'css'", "'once'", "'multiple'", "'when'", "'not'", 
                            "'and'", null, null, null, null, null, null, 
                            null, null, "'color'", "'convert'", "'data-uri'", 
                            "'default'", "'unit'", "'get-unit'", "'svg-gradient'", 
                            "'escape'", "'e'", null, "'replace'", "'length'", 
                            "'extract'", "'ceil'", "'floor'", "'percentage'", 
                            "'round'", "'sqrt'", "'abs'", "'sin'", "'asin'", 
                            "'cos'", "'acos'", "'tan'", "'atan'", "'pi'", 
                            "'pow'", "'mod'", "'min'", "'max'", "'isnumber'", 
                            "'isstring'", "'iscolor'", "'iskeyword'", "'isurl'", 
                            "'ispixel'", "'isem'", "'ispercentage'", "'isunit'", 
                            "'rgb'", "'rgba'", "'argb'", "'hsl'", "'hsla'", 
                            "'hsv'", "'hsva'", "'hue'", "'saturation'", 
                            "'lightness'", "'hsvhue'", "'hsvsaturation'", 
                            "'hsvvalue'", "'red'", "'green'", "'blue'", 
                            "'alpha'", "'luma'", "'luminance'", "'saturate'", 
                            "'desaturate'", "'lighten'", "'darken'", "'fadein'", 
                            "'fadeout'", "'fade'", "'spin'", "'mix'", "'greyscale'", 
                            "'contrast'", "'multiply'", "'screen'", "'overlay'", 
                            "'softlight'", "'hardlight'", "'difference'", 
                            "'exclusion'", "'average'", "'negation'" ];
    static symbolicNames = [ null, "NULL_", "IN", "Unit", "Ellipsis", "InterpolationStart", 
                             "LPAREN", "RPAREN", "BlockStart", "BlockEnd", 
                             "LBRACK", "RBRACK", "GT", "TIL", "LT", "COLON", 
                             "SEMI", "COMMA", "DOT", "DOLLAR", "AT", "PARENTREF", 
                             "HASH", "COLONCOLON", "PLUS", "TIMES", "DIV", 
                             "MINUS", "PERC", "EQEQ", "GTEQ", "LTEQ", "NOTEQ", 
                             "EQ", "PIPE_EQ", "TILD_EQ", "URL", "UrlStart", 
                             "IMPORT", "MEDIA", "EXTEND", "IMPORTANT", "ARGUMENTS", 
                             "REST", "REFERENCE", "INLINE", "LESS", "CSS", 
                             "ONCE", "MULTIPLE", "WHEN", "NOT", "AND", "Identifier", 
                             "StringLiteral", "Number", "Color", "WS", "SL_COMMENT", 
                             "COMMENT", "FUNCTION_NAME", "COLOR", "CONVERT", 
                             "DATA_URI", "DEFAULT", "UNIT", "GET_UNIT", 
                             "SVG_GRADIENT", "ESCAPE", "E", "FORMAT", "REPLACE", 
                             "LENGTH", "EXTRACT", "CEIL", "FLOOR", "PERCENTAGE", 
                             "ROUND", "SQRT", "ABS", "SIN", "ASIN", "COS", 
                             "ACOS", "TAN", "ATAN", "PI", "POW", "MOD", 
                             "MIN", "MAX", "ISNUMBER", "ISSTRING", "ISCOLOR", 
                             "ISKEYWORD", "ISURL", "ISPIXEL", "ISEM", "ISPERCENTAGE", 
                             "ISUNIT", "RGB", "RGBA", "ARGB", "HSL", "HSLA", 
                             "HSV", "HSVA", "HUE", "SATURATION", "LIGHTNESS", 
                             "HSVHUE", "HSVSATURATION", "HSVVALUE", "RED", 
                             "GREEN", "BLUE", "ALPHA", "LUMA", "LUMINANCE", 
                             "SATURATE", "DESATURATE", "LIGHTEN", "DARKEN", 
                             "FADEIN", "FADEOUT", "FADE", "SPIN", "MIX", 
                             "GREYSCALE", "CONTRAST", "MULTIPLY", "SCREEN", 
                             "OVERLAY", "SOFTLIGHT", "HARDLIGHT", "DIFFERENCE", 
                             "EXCLUSION", "AVERAGE", "NEGATION", "UrlEnd", 
                             "Url", "SPACE", "InterpolationStartAfter", 
                             "IdentifierAfter" ];
    static ruleNames = [ "stylesheet", "statement", "variableName", "commandStatement", 
                         "mathCharacter", "mathStatement", "expression", 
                         "function_", "conditions", "condition", "conditionStatement", 
                         "variableDeclaration", "importDeclaration", "importOption", 
                         "referenceUrl", "mediaTypes", "ruleset", "block", 
                         "mixinDefinition", "mixinGuard", "mixinDefinitionParam", 
                         "mixinReference", "selectors", "selector", "attrib", 
                         "negation", "pseudo", "element", "selectorPrefix", 
                         "attribRelate", "identifier", "identifierPart", 
                         "identifierVariableName", "property_", "values", 
                         "url", "measurement" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LessParser.ruleNames;
        this.literalNames = LessParser.literalNames;
        this.symbolicNames = LessParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	stylesheet() {
	    let localctx = new StylesheetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LessParser.RULE_stylesheet);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LessParser.InterpolationStart) | (1 << LessParser.GT) | (1 << LessParser.TIL) | (1 << LessParser.COLON) | (1 << LessParser.AT) | (1 << LessParser.PARENTREF) | (1 << LessParser.HASH) | (1 << LessParser.COLONCOLON) | (1 << LessParser.PLUS) | (1 << LessParser.TIMES))) !== 0) || _la===LessParser.IMPORT || _la===LessParser.Identifier) {
	            this.state = 74;
	            this.statement();
	            this.state = 79;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LessParser.RULE_statement);
	    try {
	        this.state = 86;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 80;
	            this.importDeclaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 81;
	            this.ruleset();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 82;
	            this.variableDeclaration();
	            this.state = 83;
	            this.match(LessParser.SEMI);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 85;
	            this.mixinDefinition();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableName() {
	    let localctx = new VariableNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LessParser.RULE_variableName);
	    try {
	        this.state = 92;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 88;
	            this.match(LessParser.AT);
	            this.state = 89;
	            this.variableName();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 90;
	            this.match(LessParser.AT);
	            this.state = 91;
	            this.match(LessParser.Identifier);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	commandStatement() {
	    let localctx = new CommandStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LessParser.RULE_commandStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 94;
	            this.expression();
	            this.state = 97; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===LessParser.InterpolationStart || _la===LessParser.AT || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (LessParser.UrlStart - 37)) | (1 << (LessParser.Identifier - 37)) | (1 << (LessParser.StringLiteral - 37)) | (1 << (LessParser.Number - 37)) | (1 << (LessParser.Color - 37)))) !== 0));
	        this.state = 100;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LessParser.PLUS) | (1 << LessParser.TIMES) | (1 << LessParser.DIV) | (1 << LessParser.MINUS) | (1 << LessParser.PERC))) !== 0)) {
	            this.state = 99;
	            this.mathStatement();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mathCharacter() {
	    let localctx = new MathCharacterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LessParser.RULE_mathCharacter);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LessParser.PLUS) | (1 << LessParser.TIMES) | (1 << LessParser.DIV) | (1 << LessParser.MINUS) | (1 << LessParser.PERC))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mathStatement() {
	    let localctx = new MathStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LessParser.RULE_mathStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.mathCharacter();
	        this.state = 105;
	        this.commandStatement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LessParser.RULE_expression);
	    var _la = 0; // Token type
	    try {
	        this.state = 126;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 107;
	            this.measurement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 108;
	            this.identifier();
	            this.state = 109;
	            this.match(LessParser.IMPORTANT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 111;
	            this.identifier();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 112;
	            this.identifier();
	            this.state = 113;
	            this.match(LessParser.LPAREN);
	            this.state = 115;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===LessParser.InterpolationStart || _la===LessParser.AT || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (LessParser.UrlStart - 37)) | (1 << (LessParser.Identifier - 37)) | (1 << (LessParser.StringLiteral - 37)) | (1 << (LessParser.Number - 37)) | (1 << (LessParser.Color - 37)))) !== 0)) {
	                this.state = 114;
	                this.values();
	            }

	            this.state = 117;
	            this.match(LessParser.RPAREN);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 119;
	            this.match(LessParser.Color);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 120;
	            this.match(LessParser.StringLiteral);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 121;
	            this.url();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 122;
	            this.variableName();
	            this.state = 123;
	            this.match(LessParser.IMPORTANT);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 125;
	            this.variableName();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_() {
	    let localctx = new Function_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LessParser.RULE_function_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this.match(LessParser.FUNCTION_NAME);
	        this.state = 129;
	        this.match(LessParser.LPAREN);
	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.InterpolationStart || _la===LessParser.AT || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (LessParser.UrlStart - 37)) | (1 << (LessParser.Identifier - 37)) | (1 << (LessParser.StringLiteral - 37)) | (1 << (LessParser.Number - 37)) | (1 << (LessParser.Color - 37)))) !== 0)) {
	            this.state = 130;
	            this.values();
	        }

	        this.state = 133;
	        this.match(LessParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conditions() {
	    let localctx = new ConditionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LessParser.RULE_conditions);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this.condition();
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LessParser.COMMA || _la===LessParser.AND) {
	            this.state = 136;
	            _la = this._input.LA(1);
	            if(!(_la===LessParser.COMMA || _la===LessParser.AND)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 137;
	            this.condition();
	            this.state = 142;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LessParser.RULE_condition);
	    try {
	        this.state = 152;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LessParser.LPAREN:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 143;
	            this.match(LessParser.LPAREN);
	            this.state = 144;
	            this.conditionStatement();
	            this.state = 145;
	            this.match(LessParser.RPAREN);
	            break;
	        case LessParser.NOT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 147;
	            this.match(LessParser.NOT);
	            this.state = 148;
	            this.match(LessParser.LPAREN);
	            this.state = 149;
	            this.conditionStatement();
	            this.state = 150;
	            this.match(LessParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conditionStatement() {
	    let localctx = new ConditionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LessParser.RULE_conditionStatement);
	    var _la = 0; // Token type
	    try {
	        this.state = 159;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 154;
	            this.commandStatement();
	            this.state = 155;
	            _la = this._input.LA(1);
	            if(!(((((_la - 12)) & ~0x1f) == 0 && ((1 << (_la - 12)) & ((1 << (LessParser.GT - 12)) | (1 << (LessParser.LT - 12)) | (1 << (LessParser.GTEQ - 12)) | (1 << (LessParser.LTEQ - 12)) | (1 << (LessParser.EQ - 12)))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 156;
	            this.commandStatement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 158;
	            this.commandStatement();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDeclaration() {
	    let localctx = new VariableDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, LessParser.RULE_variableDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.variableName();
	        this.state = 162;
	        this.match(LessParser.COLON);
	        this.state = 163;
	        this.values();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importDeclaration() {
	    let localctx = new ImportDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LessParser.RULE_importDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        this.match(LessParser.IMPORT);
	        this.state = 177;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.LPAREN) {
	            this.state = 166;
	            this.match(LessParser.LPAREN);

	            this.state = 167;
	            this.importOption();
	            this.state = 172;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===LessParser.COMMA) {
	                this.state = 168;
	                this.match(LessParser.COMMA);
	                this.state = 169;
	                this.importOption();
	                this.state = 174;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 175;
	            this.match(LessParser.RPAREN);
	        }

	        this.state = 179;
	        this.referenceUrl();
	        this.state = 181;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.Identifier) {
	            this.state = 180;
	            this.mediaTypes();
	        }

	        this.state = 183;
	        this.match(LessParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importOption() {
	    let localctx = new ImportOptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, LessParser.RULE_importOption);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 185;
	        _la = this._input.LA(1);
	        if(!(((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (LessParser.REFERENCE - 44)) | (1 << (LessParser.INLINE - 44)) | (1 << (LessParser.LESS - 44)) | (1 << (LessParser.CSS - 44)) | (1 << (LessParser.ONCE - 44)) | (1 << (LessParser.MULTIPLE - 44)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	referenceUrl() {
	    let localctx = new ReferenceUrlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, LessParser.RULE_referenceUrl);
	    try {
	        this.state = 191;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LessParser.StringLiteral:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 187;
	            this.match(LessParser.StringLiteral);
	            break;
	        case LessParser.UrlStart:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 188;
	            this.match(LessParser.UrlStart);
	            this.state = 189;
	            this.match(LessParser.Url);
	            this.state = 190;
	            this.match(LessParser.UrlEnd);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mediaTypes() {
	    let localctx = new MediaTypesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, LessParser.RULE_mediaTypes);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this.match(LessParser.Identifier);
	        this.state = 198;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LessParser.COMMA) {
	            this.state = 194;
	            this.match(LessParser.COMMA);
	            this.state = 195;
	            this.match(LessParser.Identifier);
	            this.state = 200;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ruleset() {
	    let localctx = new RulesetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, LessParser.RULE_ruleset);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.selectors();
	        this.state = 202;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, LessParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
	        this.match(LessParser.BlockStart);
	        this.state = 212;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 210;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 205;
	                    this.property_();
	                    this.state = 206;
	                    this.match(LessParser.SEMI);
	                    break;

	                case 2:
	                    this.state = 208;
	                    this.statement();
	                    break;

	                case 3:
	                    this.state = 209;
	                    this.mixinReference();
	                    break;

	                } 
	            }
	            this.state = 214;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        }

	        this.state = 216;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.InterpolationStart || _la===LessParser.Identifier) {
	            this.state = 215;
	            this.property_();
	        }

	        this.state = 218;
	        this.match(LessParser.BlockEnd);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mixinDefinition() {
	    let localctx = new MixinDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, LessParser.RULE_mixinDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this.selectors();
	        this.state = 221;
	        this.match(LessParser.LPAREN);
	        this.state = 230;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.AT) {
	            this.state = 222;
	            this.mixinDefinitionParam();
	            this.state = 227;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===LessParser.SEMI) {
	                this.state = 223;
	                this.match(LessParser.SEMI);
	                this.state = 224;
	                this.mixinDefinitionParam();
	                this.state = 229;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 233;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.Ellipsis) {
	            this.state = 232;
	            this.match(LessParser.Ellipsis);
	        }

	        this.state = 235;
	        this.match(LessParser.RPAREN);
	        this.state = 237;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.WHEN) {
	            this.state = 236;
	            this.mixinGuard();
	        }

	        this.state = 239;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mixinGuard() {
	    let localctx = new MixinGuardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, LessParser.RULE_mixinGuard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 241;
	        this.match(LessParser.WHEN);
	        this.state = 242;
	        this.conditions();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mixinDefinitionParam() {
	    let localctx = new MixinDefinitionParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, LessParser.RULE_mixinDefinitionParam);
	    try {
	        this.state = 246;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 244;
	            this.variableName();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 245;
	            this.variableDeclaration();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mixinReference() {
	    let localctx = new MixinReferenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, LessParser.RULE_mixinReference);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.selector();
	        this.state = 249;
	        this.match(LessParser.LPAREN);
	        this.state = 251;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.InterpolationStart || _la===LessParser.AT || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (LessParser.UrlStart - 37)) | (1 << (LessParser.Identifier - 37)) | (1 << (LessParser.StringLiteral - 37)) | (1 << (LessParser.Number - 37)) | (1 << (LessParser.Color - 37)))) !== 0)) {
	            this.state = 250;
	            this.values();
	        }

	        this.state = 253;
	        this.match(LessParser.RPAREN);
	        this.state = 255;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.IMPORTANT) {
	            this.state = 254;
	            this.match(LessParser.IMPORTANT);
	        }

	        this.state = 257;
	        this.match(LessParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	selectors() {
	    let localctx = new SelectorsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, LessParser.RULE_selectors);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        this.selector();
	        this.state = 264;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LessParser.COMMA) {
	            this.state = 260;
	            this.match(LessParser.COMMA);
	            this.state = 261;
	            this.selector();
	            this.state = 266;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	selector() {
	    let localctx = new SelectorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, LessParser.RULE_selector);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 267;
	        		this.element();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 270; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,27, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 275;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LessParser.LBRACK) {
	            this.state = 272;
	            this.attrib();
	            this.state = 277;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 279;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.COLON || _la===LessParser.COLONCOLON) {
	            this.state = 278;
	            this.pseudo();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attrib() {
	    let localctx = new AttribContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, LessParser.RULE_attrib);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 281;
	        this.match(LessParser.LBRACK);
	        this.state = 282;
	        this.match(LessParser.Identifier);
	        this.state = 286;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (LessParser.EQ - 33)) | (1 << (LessParser.PIPE_EQ - 33)) | (1 << (LessParser.TILD_EQ - 33)))) !== 0)) {
	            this.state = 283;
	            this.attribRelate();
	            this.state = 284;
	            _la = this._input.LA(1);
	            if(!(_la===LessParser.Identifier || _la===LessParser.StringLiteral)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 288;
	        this.match(LessParser.RBRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	negation() {
	    let localctx = new NegationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, LessParser.RULE_negation);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        this.match(LessParser.COLON);
	        this.state = 291;
	        this.match(LessParser.NOT);
	        this.state = 292;
	        this.match(LessParser.LPAREN);
	        this.state = 294;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.LBRACK) {
	            this.state = 293;
	            this.match(LessParser.LBRACK);
	        }

	        this.state = 296;
	        this.selectors();
	        this.state = 298;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.RBRACK) {
	            this.state = 297;
	            this.match(LessParser.RBRACK);
	        }

	        this.state = 300;
	        this.match(LessParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pseudo() {
	    let localctx = new PseudoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, LessParser.RULE_pseudo);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        _la = this._input.LA(1);
	        if(!(_la===LessParser.COLON || _la===LessParser.COLONCOLON)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 303;
	        this.match(LessParser.Identifier);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	element() {
	    let localctx = new ElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, LessParser.RULE_element);
	    try {
	        this.state = 315;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 305;
	            this.selectorPrefix();
	            this.state = 306;
	            this.identifier();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 308;
	            this.identifier();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 309;
	            this.match(LessParser.HASH);
	            this.state = 310;
	            this.identifier();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 311;
	            this.pseudo();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 312;
	            this.negation();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 313;
	            this.match(LessParser.PARENTREF);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 314;
	            this.match(LessParser.TIMES);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	selectorPrefix() {
	    let localctx = new SelectorPrefixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, LessParser.RULE_selectorPrefix);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 317;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LessParser.GT) | (1 << LessParser.TIL) | (1 << LessParser.PLUS))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attribRelate() {
	    let localctx = new AttribRelateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, LessParser.RULE_attribRelate);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 319;
	        _la = this._input.LA(1);
	        if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (LessParser.EQ - 33)) | (1 << (LessParser.PIPE_EQ - 33)) | (1 << (LessParser.TILD_EQ - 33)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, LessParser.RULE_identifier);
	    var _la = 0; // Token type
	    try {
	        this.state = 337;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LessParser.Identifier:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 321;
	            this.match(LessParser.Identifier);
	            this.state = 325;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===LessParser.InterpolationStartAfter || _la===LessParser.IdentifierAfter) {
	                this.state = 322;
	                this.identifierPart();
	                this.state = 327;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case LessParser.InterpolationStart:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 328;
	            this.match(LessParser.InterpolationStart);
	            this.state = 329;
	            this.identifierVariableName();
	            this.state = 330;
	            this.match(LessParser.BlockEnd);
	            this.state = 334;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===LessParser.InterpolationStartAfter || _la===LessParser.IdentifierAfter) {
	                this.state = 331;
	                this.identifierPart();
	                this.state = 336;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifierPart() {
	    let localctx = new IdentifierPartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, LessParser.RULE_identifierPart);
	    try {
	        this.state = 344;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LessParser.InterpolationStartAfter:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 339;
	            this.match(LessParser.InterpolationStartAfter);
	            this.state = 340;
	            this.identifierVariableName();
	            this.state = 341;
	            this.match(LessParser.BlockEnd);
	            break;
	        case LessParser.IdentifierAfter:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 343;
	            this.match(LessParser.IdentifierAfter);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifierVariableName() {
	    let localctx = new IdentifierVariableNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, LessParser.RULE_identifierVariableName);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 346;
	        _la = this._input.LA(1);
	        if(!(_la===LessParser.Identifier || _la===LessParser.IdentifierAfter)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	property_() {
	    let localctx = new Property_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, LessParser.RULE_property_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 348;
	        this.identifier();
	        this.state = 349;
	        this.match(LessParser.COLON);
	        this.state = 350;
	        this.values();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	values() {
	    let localctx = new ValuesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, LessParser.RULE_values);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 352;
	        this.commandStatement();
	        this.state = 357;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LessParser.COMMA) {
	            this.state = 353;
	            this.match(LessParser.COMMA);
	            this.state = 354;
	            this.commandStatement();
	            this.state = 359;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	url() {
	    let localctx = new UrlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, LessParser.RULE_url);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 360;
	        this.match(LessParser.UrlStart);
	        this.state = 361;
	        this.match(LessParser.Url);
	        this.state = 362;
	        this.match(LessParser.UrlEnd);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	measurement() {
	    let localctx = new MeasurementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, LessParser.RULE_measurement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 364;
	        this.match(LessParser.Number);
	        this.state = 366;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.Unit) {
	            this.state = 365;
	            this.match(LessParser.Unit);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LessParser.EOF = antlr4.Token.EOF;
LessParser.NULL_ = 1;
LessParser.IN = 2;
LessParser.Unit = 3;
LessParser.Ellipsis = 4;
LessParser.InterpolationStart = 5;
LessParser.LPAREN = 6;
LessParser.RPAREN = 7;
LessParser.BlockStart = 8;
LessParser.BlockEnd = 9;
LessParser.LBRACK = 10;
LessParser.RBRACK = 11;
LessParser.GT = 12;
LessParser.TIL = 13;
LessParser.LT = 14;
LessParser.COLON = 15;
LessParser.SEMI = 16;
LessParser.COMMA = 17;
LessParser.DOT = 18;
LessParser.DOLLAR = 19;
LessParser.AT = 20;
LessParser.PARENTREF = 21;
LessParser.HASH = 22;
LessParser.COLONCOLON = 23;
LessParser.PLUS = 24;
LessParser.TIMES = 25;
LessParser.DIV = 26;
LessParser.MINUS = 27;
LessParser.PERC = 28;
LessParser.EQEQ = 29;
LessParser.GTEQ = 30;
LessParser.LTEQ = 31;
LessParser.NOTEQ = 32;
LessParser.EQ = 33;
LessParser.PIPE_EQ = 34;
LessParser.TILD_EQ = 35;
LessParser.URL = 36;
LessParser.UrlStart = 37;
LessParser.IMPORT = 38;
LessParser.MEDIA = 39;
LessParser.EXTEND = 40;
LessParser.IMPORTANT = 41;
LessParser.ARGUMENTS = 42;
LessParser.REST = 43;
LessParser.REFERENCE = 44;
LessParser.INLINE = 45;
LessParser.LESS = 46;
LessParser.CSS = 47;
LessParser.ONCE = 48;
LessParser.MULTIPLE = 49;
LessParser.WHEN = 50;
LessParser.NOT = 51;
LessParser.AND = 52;
LessParser.Identifier = 53;
LessParser.StringLiteral = 54;
LessParser.Number = 55;
LessParser.Color = 56;
LessParser.WS = 57;
LessParser.SL_COMMENT = 58;
LessParser.COMMENT = 59;
LessParser.FUNCTION_NAME = 60;
LessParser.COLOR = 61;
LessParser.CONVERT = 62;
LessParser.DATA_URI = 63;
LessParser.DEFAULT = 64;
LessParser.UNIT = 65;
LessParser.GET_UNIT = 66;
LessParser.SVG_GRADIENT = 67;
LessParser.ESCAPE = 68;
LessParser.E = 69;
LessParser.FORMAT = 70;
LessParser.REPLACE = 71;
LessParser.LENGTH = 72;
LessParser.EXTRACT = 73;
LessParser.CEIL = 74;
LessParser.FLOOR = 75;
LessParser.PERCENTAGE = 76;
LessParser.ROUND = 77;
LessParser.SQRT = 78;
LessParser.ABS = 79;
LessParser.SIN = 80;
LessParser.ASIN = 81;
LessParser.COS = 82;
LessParser.ACOS = 83;
LessParser.TAN = 84;
LessParser.ATAN = 85;
LessParser.PI = 86;
LessParser.POW = 87;
LessParser.MOD = 88;
LessParser.MIN = 89;
LessParser.MAX = 90;
LessParser.ISNUMBER = 91;
LessParser.ISSTRING = 92;
LessParser.ISCOLOR = 93;
LessParser.ISKEYWORD = 94;
LessParser.ISURL = 95;
LessParser.ISPIXEL = 96;
LessParser.ISEM = 97;
LessParser.ISPERCENTAGE = 98;
LessParser.ISUNIT = 99;
LessParser.RGB = 100;
LessParser.RGBA = 101;
LessParser.ARGB = 102;
LessParser.HSL = 103;
LessParser.HSLA = 104;
LessParser.HSV = 105;
LessParser.HSVA = 106;
LessParser.HUE = 107;
LessParser.SATURATION = 108;
LessParser.LIGHTNESS = 109;
LessParser.HSVHUE = 110;
LessParser.HSVSATURATION = 111;
LessParser.HSVVALUE = 112;
LessParser.RED = 113;
LessParser.GREEN = 114;
LessParser.BLUE = 115;
LessParser.ALPHA = 116;
LessParser.LUMA = 117;
LessParser.LUMINANCE = 118;
LessParser.SATURATE = 119;
LessParser.DESATURATE = 120;
LessParser.LIGHTEN = 121;
LessParser.DARKEN = 122;
LessParser.FADEIN = 123;
LessParser.FADEOUT = 124;
LessParser.FADE = 125;
LessParser.SPIN = 126;
LessParser.MIX = 127;
LessParser.GREYSCALE = 128;
LessParser.CONTRAST = 129;
LessParser.MULTIPLY = 130;
LessParser.SCREEN = 131;
LessParser.OVERLAY = 132;
LessParser.SOFTLIGHT = 133;
LessParser.HARDLIGHT = 134;
LessParser.DIFFERENCE = 135;
LessParser.EXCLUSION = 136;
LessParser.AVERAGE = 137;
LessParser.NEGATION = 138;
LessParser.UrlEnd = 139;
LessParser.Url = 140;
LessParser.SPACE = 141;
LessParser.InterpolationStartAfter = 142;
LessParser.IdentifierAfter = 143;

LessParser.RULE_stylesheet = 0;
LessParser.RULE_statement = 1;
LessParser.RULE_variableName = 2;
LessParser.RULE_commandStatement = 3;
LessParser.RULE_mathCharacter = 4;
LessParser.RULE_mathStatement = 5;
LessParser.RULE_expression = 6;
LessParser.RULE_function_ = 7;
LessParser.RULE_conditions = 8;
LessParser.RULE_condition = 9;
LessParser.RULE_conditionStatement = 10;
LessParser.RULE_variableDeclaration = 11;
LessParser.RULE_importDeclaration = 12;
LessParser.RULE_importOption = 13;
LessParser.RULE_referenceUrl = 14;
LessParser.RULE_mediaTypes = 15;
LessParser.RULE_ruleset = 16;
LessParser.RULE_block = 17;
LessParser.RULE_mixinDefinition = 18;
LessParser.RULE_mixinGuard = 19;
LessParser.RULE_mixinDefinitionParam = 20;
LessParser.RULE_mixinReference = 21;
LessParser.RULE_selectors = 22;
LessParser.RULE_selector = 23;
LessParser.RULE_attrib = 24;
LessParser.RULE_negation = 25;
LessParser.RULE_pseudo = 26;
LessParser.RULE_element = 27;
LessParser.RULE_selectorPrefix = 28;
LessParser.RULE_attribRelate = 29;
LessParser.RULE_identifier = 30;
LessParser.RULE_identifierPart = 31;
LessParser.RULE_identifierVariableName = 32;
LessParser.RULE_property_ = 33;
LessParser.RULE_values = 34;
LessParser.RULE_url = 35;
LessParser.RULE_measurement = 36;

class StylesheetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_stylesheet;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterStylesheet(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitStylesheet(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_statement;
    }

	importDeclaration() {
	    return this.getTypedRuleContext(ImportDeclarationContext,0);
	};

	ruleset() {
	    return this.getTypedRuleContext(RulesetContext,0);
	};

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	SEMI() {
	    return this.getToken(LessParser.SEMI, 0);
	};

	mixinDefinition() {
	    return this.getTypedRuleContext(MixinDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitStatement(this);
		}
	}


}



class VariableNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_variableName;
    }

	AT() {
	    return this.getToken(LessParser.AT, 0);
	};

	variableName() {
	    return this.getTypedRuleContext(VariableNameContext,0);
	};

	Identifier() {
	    return this.getToken(LessParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterVariableName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitVariableName(this);
		}
	}


}



class CommandStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_commandStatement;
    }

	mathStatement() {
	    return this.getTypedRuleContext(MathStatementContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterCommandStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitCommandStatement(this);
		}
	}


}



class MathCharacterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_mathCharacter;
    }

	TIMES() {
	    return this.getToken(LessParser.TIMES, 0);
	};

	PLUS() {
	    return this.getToken(LessParser.PLUS, 0);
	};

	DIV() {
	    return this.getToken(LessParser.DIV, 0);
	};

	MINUS() {
	    return this.getToken(LessParser.MINUS, 0);
	};

	PERC() {
	    return this.getToken(LessParser.PERC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterMathCharacter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitMathCharacter(this);
		}
	}


}



class MathStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_mathStatement;
    }

	mathCharacter() {
	    return this.getTypedRuleContext(MathCharacterContext,0);
	};

	commandStatement() {
	    return this.getTypedRuleContext(CommandStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterMathStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitMathStatement(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_expression;
    }

	measurement() {
	    return this.getTypedRuleContext(MeasurementContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	IMPORTANT() {
	    return this.getToken(LessParser.IMPORTANT, 0);
	};

	LPAREN() {
	    return this.getToken(LessParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(LessParser.RPAREN, 0);
	};

	values() {
	    return this.getTypedRuleContext(ValuesContext,0);
	};

	Color() {
	    return this.getToken(LessParser.Color, 0);
	};

	StringLiteral() {
	    return this.getToken(LessParser.StringLiteral, 0);
	};

	url() {
	    return this.getTypedRuleContext(UrlContext,0);
	};

	variableName() {
	    return this.getTypedRuleContext(VariableNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitExpression(this);
		}
	}


}



class Function_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_function_;
    }

	FUNCTION_NAME() {
	    return this.getToken(LessParser.FUNCTION_NAME, 0);
	};

	LPAREN() {
	    return this.getToken(LessParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(LessParser.RPAREN, 0);
	};

	values() {
	    return this.getTypedRuleContext(ValuesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterFunction_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitFunction_(this);
		}
	}


}



class ConditionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_conditions;
    }

	condition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionContext);
	    } else {
	        return this.getTypedRuleContext(ConditionContext,i);
	    }
	};

	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LessParser.AND);
	    } else {
	        return this.getToken(LessParser.AND, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LessParser.COMMA);
	    } else {
	        return this.getToken(LessParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterConditions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitConditions(this);
		}
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_condition;
    }

	LPAREN() {
	    return this.getToken(LessParser.LPAREN, 0);
	};

	conditionStatement() {
	    return this.getTypedRuleContext(ConditionStatementContext,0);
	};

	RPAREN() {
	    return this.getToken(LessParser.RPAREN, 0);
	};

	NOT() {
	    return this.getToken(LessParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitCondition(this);
		}
	}


}



class ConditionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_conditionStatement;
    }

	commandStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommandStatementContext);
	    } else {
	        return this.getTypedRuleContext(CommandStatementContext,i);
	    }
	};

	EQ() {
	    return this.getToken(LessParser.EQ, 0);
	};

	LT() {
	    return this.getToken(LessParser.LT, 0);
	};

	GT() {
	    return this.getToken(LessParser.GT, 0);
	};

	GTEQ() {
	    return this.getToken(LessParser.GTEQ, 0);
	};

	LTEQ() {
	    return this.getToken(LessParser.LTEQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterConditionStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitConditionStatement(this);
		}
	}


}



class VariableDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_variableDeclaration;
    }

	variableName() {
	    return this.getTypedRuleContext(VariableNameContext,0);
	};

	COLON() {
	    return this.getToken(LessParser.COLON, 0);
	};

	values() {
	    return this.getTypedRuleContext(ValuesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterVariableDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitVariableDeclaration(this);
		}
	}


}



class ImportDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_importDeclaration;
    }

	IMPORT() {
	    return this.getToken(LessParser.IMPORT, 0);
	};

	referenceUrl() {
	    return this.getTypedRuleContext(ReferenceUrlContext,0);
	};

	SEMI() {
	    return this.getToken(LessParser.SEMI, 0);
	};

	LPAREN() {
	    return this.getToken(LessParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(LessParser.RPAREN, 0);
	};

	mediaTypes() {
	    return this.getTypedRuleContext(MediaTypesContext,0);
	};

	importOption = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImportOptionContext);
	    } else {
	        return this.getTypedRuleContext(ImportOptionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LessParser.COMMA);
	    } else {
	        return this.getToken(LessParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterImportDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitImportDeclaration(this);
		}
	}


}



class ImportOptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_importOption;
    }

	REFERENCE() {
	    return this.getToken(LessParser.REFERENCE, 0);
	};

	INLINE() {
	    return this.getToken(LessParser.INLINE, 0);
	};

	LESS() {
	    return this.getToken(LessParser.LESS, 0);
	};

	CSS() {
	    return this.getToken(LessParser.CSS, 0);
	};

	ONCE() {
	    return this.getToken(LessParser.ONCE, 0);
	};

	MULTIPLE() {
	    return this.getToken(LessParser.MULTIPLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterImportOption(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitImportOption(this);
		}
	}


}



class ReferenceUrlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_referenceUrl;
    }

	StringLiteral() {
	    return this.getToken(LessParser.StringLiteral, 0);
	};

	UrlStart() {
	    return this.getToken(LessParser.UrlStart, 0);
	};

	Url() {
	    return this.getToken(LessParser.Url, 0);
	};

	UrlEnd() {
	    return this.getToken(LessParser.UrlEnd, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterReferenceUrl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitReferenceUrl(this);
		}
	}


}



class MediaTypesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_mediaTypes;
    }

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LessParser.Identifier);
	    } else {
	        return this.getToken(LessParser.Identifier, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LessParser.COMMA);
	    } else {
	        return this.getToken(LessParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterMediaTypes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitMediaTypes(this);
		}
	}


}



class RulesetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_ruleset;
    }

	selectors() {
	    return this.getTypedRuleContext(SelectorsContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterRuleset(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitRuleset(this);
		}
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_block;
    }

	BlockStart() {
	    return this.getToken(LessParser.BlockStart, 0);
	};

	BlockEnd() {
	    return this.getToken(LessParser.BlockEnd, 0);
	};

	property_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Property_Context);
	    } else {
	        return this.getTypedRuleContext(Property_Context,i);
	    }
	};

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LessParser.SEMI);
	    } else {
	        return this.getToken(LessParser.SEMI, i);
	    }
	};


	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	mixinReference = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MixinReferenceContext);
	    } else {
	        return this.getTypedRuleContext(MixinReferenceContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitBlock(this);
		}
	}


}



class MixinDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_mixinDefinition;
    }

	selectors() {
	    return this.getTypedRuleContext(SelectorsContext,0);
	};

	LPAREN() {
	    return this.getToken(LessParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(LessParser.RPAREN, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	mixinDefinitionParam = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MixinDefinitionParamContext);
	    } else {
	        return this.getTypedRuleContext(MixinDefinitionParamContext,i);
	    }
	};

	Ellipsis() {
	    return this.getToken(LessParser.Ellipsis, 0);
	};

	mixinGuard() {
	    return this.getTypedRuleContext(MixinGuardContext,0);
	};

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LessParser.SEMI);
	    } else {
	        return this.getToken(LessParser.SEMI, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterMixinDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitMixinDefinition(this);
		}
	}


}



class MixinGuardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_mixinGuard;
    }

	WHEN() {
	    return this.getToken(LessParser.WHEN, 0);
	};

	conditions() {
	    return this.getTypedRuleContext(ConditionsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterMixinGuard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitMixinGuard(this);
		}
	}


}



class MixinDefinitionParamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_mixinDefinitionParam;
    }

	variableName() {
	    return this.getTypedRuleContext(VariableNameContext,0);
	};

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterMixinDefinitionParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitMixinDefinitionParam(this);
		}
	}


}



class MixinReferenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_mixinReference;
    }

	selector() {
	    return this.getTypedRuleContext(SelectorContext,0);
	};

	LPAREN() {
	    return this.getToken(LessParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(LessParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(LessParser.SEMI, 0);
	};

	values() {
	    return this.getTypedRuleContext(ValuesContext,0);
	};

	IMPORTANT() {
	    return this.getToken(LessParser.IMPORTANT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterMixinReference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitMixinReference(this);
		}
	}


}



class SelectorsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_selectors;
    }

	selector = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SelectorContext);
	    } else {
	        return this.getTypedRuleContext(SelectorContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LessParser.COMMA);
	    } else {
	        return this.getToken(LessParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterSelectors(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitSelectors(this);
		}
	}


}



class SelectorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_selector;
    }

	element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementContext);
	    } else {
	        return this.getTypedRuleContext(ElementContext,i);
	    }
	};

	attrib = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AttribContext);
	    } else {
	        return this.getTypedRuleContext(AttribContext,i);
	    }
	};

	pseudo() {
	    return this.getTypedRuleContext(PseudoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterSelector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitSelector(this);
		}
	}


}



class AttribContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_attrib;
    }

	LBRACK() {
	    return this.getToken(LessParser.LBRACK, 0);
	};

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LessParser.Identifier);
	    } else {
	        return this.getToken(LessParser.Identifier, i);
	    }
	};


	RBRACK() {
	    return this.getToken(LessParser.RBRACK, 0);
	};

	attribRelate() {
	    return this.getTypedRuleContext(AttribRelateContext,0);
	};

	StringLiteral() {
	    return this.getToken(LessParser.StringLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterAttrib(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitAttrib(this);
		}
	}


}



class NegationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_negation;
    }

	COLON() {
	    return this.getToken(LessParser.COLON, 0);
	};

	NOT() {
	    return this.getToken(LessParser.NOT, 0);
	};

	LPAREN() {
	    return this.getToken(LessParser.LPAREN, 0);
	};

	selectors() {
	    return this.getTypedRuleContext(SelectorsContext,0);
	};

	RPAREN() {
	    return this.getToken(LessParser.RPAREN, 0);
	};

	LBRACK() {
	    return this.getToken(LessParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(LessParser.RBRACK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterNegation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitNegation(this);
		}
	}


}



class PseudoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_pseudo;
    }

	Identifier() {
	    return this.getToken(LessParser.Identifier, 0);
	};

	COLON() {
	    return this.getToken(LessParser.COLON, 0);
	};

	COLONCOLON() {
	    return this.getToken(LessParser.COLONCOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterPseudo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitPseudo(this);
		}
	}


}



class ElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_element;
    }

	selectorPrefix() {
	    return this.getTypedRuleContext(SelectorPrefixContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	HASH() {
	    return this.getToken(LessParser.HASH, 0);
	};

	pseudo() {
	    return this.getTypedRuleContext(PseudoContext,0);
	};

	negation() {
	    return this.getTypedRuleContext(NegationContext,0);
	};

	PARENTREF() {
	    return this.getToken(LessParser.PARENTREF, 0);
	};

	TIMES() {
	    return this.getToken(LessParser.TIMES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitElement(this);
		}
	}


}



class SelectorPrefixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_selectorPrefix;
    }

	GT() {
	    return this.getToken(LessParser.GT, 0);
	};

	PLUS() {
	    return this.getToken(LessParser.PLUS, 0);
	};

	TIL() {
	    return this.getToken(LessParser.TIL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterSelectorPrefix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitSelectorPrefix(this);
		}
	}


}



class AttribRelateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_attribRelate;
    }

	EQ() {
	    return this.getToken(LessParser.EQ, 0);
	};

	TILD_EQ() {
	    return this.getToken(LessParser.TILD_EQ, 0);
	};

	PIPE_EQ() {
	    return this.getToken(LessParser.PIPE_EQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterAttribRelate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitAttribRelate(this);
		}
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_identifier;
    }

	Identifier() {
	    return this.getToken(LessParser.Identifier, 0);
	};

	identifierPart = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierPartContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierPartContext,i);
	    }
	};

	InterpolationStart() {
	    return this.getToken(LessParser.InterpolationStart, 0);
	};

	identifierVariableName() {
	    return this.getTypedRuleContext(IdentifierVariableNameContext,0);
	};

	BlockEnd() {
	    return this.getToken(LessParser.BlockEnd, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class IdentifierPartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_identifierPart;
    }

	InterpolationStartAfter() {
	    return this.getToken(LessParser.InterpolationStartAfter, 0);
	};

	identifierVariableName() {
	    return this.getTypedRuleContext(IdentifierVariableNameContext,0);
	};

	BlockEnd() {
	    return this.getToken(LessParser.BlockEnd, 0);
	};

	IdentifierAfter() {
	    return this.getToken(LessParser.IdentifierAfter, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterIdentifierPart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitIdentifierPart(this);
		}
	}


}



class IdentifierVariableNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_identifierVariableName;
    }

	Identifier() {
	    return this.getToken(LessParser.Identifier, 0);
	};

	IdentifierAfter() {
	    return this.getToken(LessParser.IdentifierAfter, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterIdentifierVariableName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitIdentifierVariableName(this);
		}
	}


}



class Property_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_property_;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	COLON() {
	    return this.getToken(LessParser.COLON, 0);
	};

	values() {
	    return this.getTypedRuleContext(ValuesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterProperty_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitProperty_(this);
		}
	}


}



class ValuesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_values;
    }

	commandStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommandStatementContext);
	    } else {
	        return this.getTypedRuleContext(CommandStatementContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LessParser.COMMA);
	    } else {
	        return this.getToken(LessParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterValues(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitValues(this);
		}
	}


}



class UrlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_url;
    }

	UrlStart() {
	    return this.getToken(LessParser.UrlStart, 0);
	};

	Url() {
	    return this.getToken(LessParser.Url, 0);
	};

	UrlEnd() {
	    return this.getToken(LessParser.UrlEnd, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterUrl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitUrl(this);
		}
	}


}



class MeasurementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_measurement;
    }

	Number() {
	    return this.getToken(LessParser.Number, 0);
	};

	Unit() {
	    return this.getToken(LessParser.Unit, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterMeasurement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitMeasurement(this);
		}
	}


}




LessParser.StylesheetContext = StylesheetContext; 
LessParser.StatementContext = StatementContext; 
LessParser.VariableNameContext = VariableNameContext; 
LessParser.CommandStatementContext = CommandStatementContext; 
LessParser.MathCharacterContext = MathCharacterContext; 
LessParser.MathStatementContext = MathStatementContext; 
LessParser.ExpressionContext = ExpressionContext; 
LessParser.Function_Context = Function_Context; 
LessParser.ConditionsContext = ConditionsContext; 
LessParser.ConditionContext = ConditionContext; 
LessParser.ConditionStatementContext = ConditionStatementContext; 
LessParser.VariableDeclarationContext = VariableDeclarationContext; 
LessParser.ImportDeclarationContext = ImportDeclarationContext; 
LessParser.ImportOptionContext = ImportOptionContext; 
LessParser.ReferenceUrlContext = ReferenceUrlContext; 
LessParser.MediaTypesContext = MediaTypesContext; 
LessParser.RulesetContext = RulesetContext; 
LessParser.BlockContext = BlockContext; 
LessParser.MixinDefinitionContext = MixinDefinitionContext; 
LessParser.MixinGuardContext = MixinGuardContext; 
LessParser.MixinDefinitionParamContext = MixinDefinitionParamContext; 
LessParser.MixinReferenceContext = MixinReferenceContext; 
LessParser.SelectorsContext = SelectorsContext; 
LessParser.SelectorContext = SelectorContext; 
LessParser.AttribContext = AttribContext; 
LessParser.NegationContext = NegationContext; 
LessParser.PseudoContext = PseudoContext; 
LessParser.ElementContext = ElementContext; 
LessParser.SelectorPrefixContext = SelectorPrefixContext; 
LessParser.AttribRelateContext = AttribRelateContext; 
LessParser.IdentifierContext = IdentifierContext; 
LessParser.IdentifierPartContext = IdentifierPartContext; 
LessParser.IdentifierVariableNameContext = IdentifierVariableNameContext; 
LessParser.Property_Context = Property_Context; 
LessParser.ValuesContext = ValuesContext; 
LessParser.UrlContext = UrlContext; 
LessParser.MeasurementContext = MeasurementContext; 
