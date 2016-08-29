
public enum Categories {

	BillionEuroPackage(0),
	GMO(1),
	GunterOettinger(2),
	Eurostat(3),
	Demography(4),
	Sport(5),
	EuropeanCinema(6),
	JonathanHill(7),
	SchengenArea(8),
	InformationSociety(9),
	EBRD(10),
	TransuranicElements(11),
	MargretheVestager(12),
	RailTransport(13),
	MarosSefcovic(14),
	Competition_StateAid(15),
	AgricultureRuralDevelopment(16),
	Roaming(17),
	EuropeanNeighbourhoodPolicy(18),
	RatingsAgencies(19),
	HumanitarianAid(20),
	EPElection(21),
	eHealth(22),
	VytenisAndriukaitis(23),
	PublicProcurement(24),
	IntellectualProperty(25),
	ReferenceMaterials(26),
	Employment(27),
	PAC(28),
	PoliticalUnrest(29),
	Audit(30),
	EuropeanCulturalCapitals(31),
	EnvironmentalProtection(32),
	GenderEquality(33),
	EIB(34),
	SingleEuropeanSky(35),
	ScientificStrategy(36),
	KristalinaGeorgieva(37),
	CustomsUnion(38),
	TTIP(39),
	EuropeAid(40),
	RuralDevelopment(41),
	EADS(42),
	TechnologyForesight(43),
	VAT(44),
	Youth(45),
	ENLARGEMENT(46),
	Erasmus(47),
	ESA(48),
	ClimateAction(49),
	PetroleumRefineries(50),
	ForgeryMoney(51),
	MaritimeTransport(52),
	EducationFilter(53),
	JohannesHahn(54),
	Ecology(55),
	Development(56),
	EnergyMarketsandStrategies(57),
	BudgetoftheEU(58),
	EFSA(59),
	EPPoliticalGroups(60),
	EuropeanGreenCapitalAward(61),
	UGTMS(62),
	InformationSecurity(63),
	Lobbyism(64),
	NatashaBertaud(65),
	AnimalHealth(66),
	SocialSituation(67),
	OSH(68),
	TobaccoSmuggling(69),
	Accounting(70),
	PRESS(71),
	Drugs(72),
	Flooding(73),
	OHIM(74),
	RacismXenophobia(75),
	SmallMediumSizeBusinesses(76),
	MEP(77),
	MinaAndreeva(78),
	Counterfeiting(79),
	FundamentalRights(80),
	MobilityOfWorkers(81),
	JRCintheMedia(82),
	RareEarth(83),
	TEN_T_News(84),
	Protectionism(85),
	Culture(86),
	Competition_Antitrust(87),
	WorldEconomy(88),
	TradeOrganisations(89),
	ICRC(90),
	EUInternet(91),
	Eurozone(92),
	FoodSafety(93),
	Globalisation(94),
	GreenVehicles(95),
	FoodSecurityFoodAid(96),
	Innovation(97),
	PeaceProcess(98),
	ChildrensRights(99),
	G8(100),
	PrivateEquity(101),
	CrisisResponse(102),
	Guantanamo(103),
	MargaritisSchinas(104),
	G7(105),
	MilleniumGoals(106),
	NuclearSafety(107),
	CivilProtection(108),
	MARS_STAT(109),
	DutchPresidencyEU(110),
	DominantPosition(111),
	Eurocontrol(112),
	Discrimination(113),
	EMF_Health(114),
	ETF(115),
	MartinSchulz(116),
	EU_Canada(117),
	DigitalContent(118),
	FransTimmermans(119),
	Tourism(120),
	CouncilPresident(121),
	HumanTraffic(122),
	G20(123),
	Telecommunications(124),
	RegionalPolicy(125),
	PierreMoscovici(126),
	MaritimeSafetyEurope(127),
	FinancialEconomicCrime(128),
	ECB(129),
	CybersecurityAntifraud(130),
	BorderControl(131),
	Competition(132),
	FedericaMogherini(133),
	DimitrisAvramopoulos(134),
	EuropeanCouncil(135),
	MaritimeSafetyWorld(136),
	WorldBank(137),
	Europol(138),
	Competition_Mergers(139),
	PeaceKeeping(140),
	EU_Japan(141),
	ClimateChange(142),
	RenewableEnergies(143),
	CommunicableDiseases(144),
	NuclearMedecine(145),
	mahb(146),
	Dumping(147),
	Agriculture(148),
	FinancialServices(149),
	Euro(150),
	Biotechnology(151),
	PublicHealth(152),
	NaturalDisasters(153),
	Society(154),
	AirTransport(155),
	EU_Pacific(156),
	EU_Caribbean(157),
	NuclearEnergy(158),
	Jean_ClaudeJuncker(159),
	ImportsExports(160),
	EuropeanParliament(161),
	Environment(162),
	FightagainstFraud(163),
	AlternativeEnergy(164),
	FrontexAgency(165),
	NuclearDecommissioning(166),
	EU_China(167),
	Asylum(168),
	ManMadeDisasters(169),
	EU_Africa(170),
	UNSecretaryGeneral(171),
	EU_LatinAmerica(172),
	ECnews(173),
	Terrorism(174),
	TaxHaven(175),
	EU_Asia(176),
	EU_USA(177),
	SecurityCouncil(178),
	TAXUD(179),
	Nuclear(180),
	Immigration(181),
	FRA_EU(182),
	JRCSafeguards(183),
	JRCNuclearSecurity(184),
	UNbodies(185),
	Security(186),
	Conflict(187),
	TerroristAttack(188);
	
	   private int value;
	   private Categories(int value) {
	      this.value = value;
	   }
	   public int getValue() {
	      return value;
	   }
		
}